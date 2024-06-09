import { gql } from "apollo-server";

export const queriesTypes = gql`
  type Query {
    getFeed: [Link!]!
    getLinkById(id: ID!): Link
    getUserById(id: ID!): User
  }
`;
