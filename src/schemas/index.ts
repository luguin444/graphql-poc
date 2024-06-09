import { gql } from "apollo-server";
import { queriesTypes } from "./queries";
import { modelsTypes } from "./models";
import { mutationTypes } from "./mutation";

export const typeDefs = gql`
  ${queriesTypes}
  ${mutationTypes}
  ${modelsTypes}
`;
