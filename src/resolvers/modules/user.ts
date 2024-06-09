import { ContextType } from "../../shared/protocols";

const getUserById = async (
  _parent: unknown,
  args: { id: string },
  context: ContextType
) => {
  console.log("hey", context.isAuthenticated);

  const user = await context.prisma.user.findUnique({
    where: {
      id: parseInt(args.id),
    },
    include: {
      links: true,
    },
  });

  if (!user) return undefined;

  return user;
};

const createUser = async (
  _parent: unknown,
  args: { name: string; email: string },
  context: ContextType
) => {
  const user = await context.prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
    },
  });

  return user;
};

export const userQueries = {
  getUserById,
};

export const userMutations = {
  createUser,
};
