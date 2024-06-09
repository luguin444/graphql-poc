import { gql } from "apollo-server";
import { queriesTypes } from "../../schemas/queries";

test("queries should have correct fields", () => {
  expect(queriesTypes).toEqual(gql`
    type Query {
      getFeed: [Link!]!
      getLinkById(id: ID!): Link
      getUserById(id: ID!): User
    }
  `);
});
