import { gql } from "apollo-server";
import { linkTypes } from "../../../schemas/models/link";

test("queries should have correct fields", () => {
  expect(linkTypes).toEqual(gql`
    type Link {
      id: ID!
      description: String!
      url: String!
      userId: ID!
      user: User!
    }
  `);
});
