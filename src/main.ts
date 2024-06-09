import "./config/env";
const { ApolloServer } = require("apollo-server");
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Runs at 4000 by default
server
  .listen()
  .then(({ url }: { url: string }) =>
    console.log(`Server is running on ${url}`)
  );
