import { gql } from "apollo-server";
import { linkTypes } from "../../../schemas/models/link";

test("modelsTypes should have correct fields", () => {
  expect(linkTypes).toEqual(gql`
    ${linkTypes}
  `);
});
