import { ContextType } from "../../shared/protocols";

const getUserById = async (
  _parent: unknown,
  args: { id: string },
  context: ContextType
) => {
  console.log("hey", context.isAuthenticated); // Daria para retornar não autroizado aqui

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

const updateUser = async (
  _parent: unknown,
  args: any,
  context: ContextType
) => {
  const user = await context.prisma.user.update({
    where: { id: parseInt(args.id) },
    data: { name: args.name, email: args.email },
  });

  return user;
};

export const userQueries = {
  getUserById,
};

export const userMutations = {
  createUser,
  updateUser,
};
