import { gql } from "apollo-server";
import { queriesTypes } from "./queries";
import { modelsTypes } from "./models";
import { mutationTypes } from "./mutation";
import { GraphQLScalarType } from "graphql";

const DateScalar = new GraphQLScalarType<Date>({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value: unknown): Date {
    return new Date(value as string);
  },
});

export const typeDefs = gql`
  scalar Date
  ${queriesTypes}
  ${mutationTypes}
  ${modelsTypes}
`;
