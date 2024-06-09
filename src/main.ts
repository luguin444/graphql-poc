import "./config/env";
import { prisma } from "./config/prisma";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";
import { validateJwt } from "./shared/vaidateJwt";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: { req: Request }) => {
    return {
      req,
      prisma,
      isAuthenticated: await validateJwt(req),
    };
  },
});

// Runs at 4000 by default
server
  .listen()
  .then(({ url }: { url: string }) =>
    console.log(`Server is running on ${url}`)
  );
