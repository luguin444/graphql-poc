import { gql } from "apollo-server";
import { mutationTypes } from "../../schemas/mutation";

test("mutations should have correct fields", () => {
  expect(mutationTypes).toEqual(gql`
    type Mutation {
      createLink(url: String!, description: String!, userId: String!): Link!
      updateLink(id: ID!, url: String, description: String): Link
      deleteLink(id: ID!): Link
      createUser(name: String!, email: String!): User!
    }
  `);
});
