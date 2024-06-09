import { gql } from "apollo-server";
import { linkTypes } from "../../../schemas/models/link";
import { modelsTypes } from "../../../schemas/models";
import { userTypes } from "../../../schemas/models/user";

test("modelsTypes should have correct fields", () => {
  expect(modelsTypes).toEqual(gql`
    ${linkTypes}
    ${userTypes}
  `);
});
