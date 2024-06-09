import { gql } from "apollo-server";
import { getTestServer } from "./testerServer";
import { linkFactory } from "../factories/link";
import { userFactory } from "../factories/user";
import { GraphQLError } from "graphql";

const serverWithoutMocks = getTestServer(false);
const serverWithMocks = getTestServer(true);

describe("TEST query getFeed", () => {
  const query = gql`
    query GetFeedQueryName {
      getFeed {
        id
        url
        description
        userId
      }
    }
  `;

  it("should return empty array since there is no link in DB", async () => {
    const response = await serverWithoutMocks.executeOperation({
      query,
    });

    expect(response.errors).toBeUndefined();
    expect(response.data.getFeed).toEqual([]);
  });

  it("should return empty array since there is no link in DB", async () => {
    const response = await serverWithMocks.executeOperation({
      query,
    });

    expect(response.errors).toBeUndefined();
    expect(response.data.getFeed[0]).toMatchObject({
      id: expect.any(String),
      url: expect.any(String),
      description: expect.any(String),
      userId: expect.any(String),
    });
  });
});

describe("TEST query getLinkById", () => {
  it("should return correct link from DB", async () => {
    const link = await linkFactory();

    const query = gql`
      query GetLink {
        getLinkById(id: ${link.id}) {
          id
          url
          description
          userId
        }
      }
    `;
    const response = await serverWithoutMocks.executeOperation({
      query,
    });

    expect(response.errors).toBeUndefined();
    expect(response.data.getLinkById).toMatchObject({
      id: link.id.toString(),
      url: link.url,
      description: link.description,
      userId: link.userId.toString(),
    });
  });
});

describe("TEST mutation createLink", () => {
  it("should create link and return it", async () => {
    const user = await userFactory();

    const mutation = gql`
      mutation {
        createLink(
          url: "www.prisma.io"
          description: "Prisma replaces traditional ORMs"
          userId: "${user.id}"
        ) {
          id
          description
          url
          userId
        }
      }
    `;
    const response = await serverWithoutMocks.executeOperation({
      query: mutation,
    });

    expect(response.errors).toBeUndefined();
    expect(response.data.createLink).toMatchObject({
      id: expect.any(String),
      url: "www.prisma.io",
      description: "Prisma replaces traditional ORMs",
      userId: user.id.toString(),
    });
  });

  it("should throw error since there is no user in the DB", async () => {
    const mutation = gql`
      mutation {
        createLink(
          url: "www.prisma.io"
          description: "Prisma replaces traditional ORMs"
          userId: "-999"
        ) {
          id
          description
          url
          userId
        }
      }
    `;
    const response = await serverWithoutMocks.executeOperation({
      query: mutation,
    });

    expect(response.errors[0]).toBeInstanceOf(GraphQLError);
    expect(response.errors[0].message).toBe(
      "Cannot create link with non-existing userId -999"
    );
  });
});
