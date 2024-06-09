import { gql } from "apollo-server";
import { userTypes } from "../../../schemas/models/user";

test("user should have correct fields", () => {
  expect(userTypes).toEqual(gql`
    type User {
      id: ID!
      name: String!
      email: String!
      links: [Link!]!
    }
  `);
});
