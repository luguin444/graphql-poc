import { gql } from "apollo-server";

export const linkTypes = gql`
  type Link {
    id: ID!
    description: String!
    url: String!
    userId: ID!
    user: User!
  }
`;

export interface Link {
  id: string;
  description: string;
  url: string;
}
