import { gql } from "apollo-server";
import { linkTypes } from "./link";
import { userTypes } from "./user";

export const modelsTypes = gql`
  ${linkTypes}
  ${userTypes}
`;
