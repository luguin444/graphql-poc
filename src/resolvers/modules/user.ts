import { prisma } from "../../config/prisma";

const getUserById = async (_parent: unknown, args: { id: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(args.id),
    },
  });

  if (!user) return undefined;

  return {
    id: user.id.toString(),
    name: user.name,
    email: user.email,
  };
};

const createUser = async (
  _parent: unknown,
  args: { name: string; email: string }
) => {
  const user = await prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
    },
  });

  return {
    id: user.id.toString(),
    name: user.name,
    email: user.email,
  };
};

export const userQueries = {
  getUserById,
};

export const userMutations = {
  createUser,
};
