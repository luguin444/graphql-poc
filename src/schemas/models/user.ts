import { gql } from "apollo-server";

export const userTypes = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
    createdAt: Date!
    updatedAt: Date!
  }
`;

export interface User {
  id: string;
  name: string;
  email: string;
}
