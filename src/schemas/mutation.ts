import { gql } from "apollo-server";

export const mutationTypes = gql`
  type Mutation {
    createLink(url: String!, description: String!, userId: String!): Link!
    updateLink(id: ID!, url: String, description: String): Link
    deleteLink(id: ID!): Link
    createUser(name: String!, email: String!): User!
  }
`;
