import { linkQueries, linkMutations } from "./modules/link";
import { userQueries, userMutations } from "./modules/user";

const resolvers = {
  Query: {
    ...linkQueries,
    ...userQueries,
  },
  Mutation: {
    ...linkMutations,
    ...userMutations,
  },
};

export { resolvers };
