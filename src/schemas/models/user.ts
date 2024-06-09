import { gql } from "apollo-server";

export const userTypes = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
  }
`;

export interface User {
  id: string;
  name: string;
  email: string;
}
