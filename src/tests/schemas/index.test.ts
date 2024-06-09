import { gql } from "apollo-server";
import { typeDefs } from "../../schemas";
import { queriesTypes } from "../../schemas/queries";
import { mutationTypes } from "../../schemas/mutation";
import { modelsTypes } from "../../schemas/models";

test("typeDefs should have correct fields", () => {
  expect(typeDefs).toEqual(gql`
    ${queriesTypes}
    ${mutationTypes}
    ${modelsTypes}
  `);
});
