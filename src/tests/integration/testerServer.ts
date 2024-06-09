import "../../config/env";
import { resolvers } from "../../resolvers";
import { typeDefs } from "../../schemas";

const { ApolloServer } = require("apollo-server");

const getTestServer = (mockDatabase: boolean) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks: mockDatabase,
  });

  return server;
};

export { getTestServer };
