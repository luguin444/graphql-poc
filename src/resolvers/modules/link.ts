import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { GraphQLError } from "graphql";
import { ContextType } from "../../shared/protocols";

const getFeed = async (
  _parent: unknown,
  _args: unknown,
  context: ContextType
) => {
  const links = await context.prisma.link.findMany({ include: { user: true } });

  return links;
};

const getLinkById = async (
  _parent: unknown,
  args: { id: string },
  context: ContextType
) => {
  const link = await context.prisma.link.findUnique({
    where: {
      id: parseInt(args.id),
    },
  });

  if (!link) return undefined;

  return link;
};

const createLink = async (
  _parent: unknown,
  args: { description: string; url: string; userId: string },
  context: ContextType
) => {
  const link = await context.prisma.link
    .create({
      data: {
        description: args.description,
        url: args.url,
        userId: parseInt(args.userId),
      },
    })
    .catch((error: unknown) => {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === "P2003" // foreign Key Error
      ) {
        return Promise.reject(
          new GraphQLError(
            `Cannot create link with non-existing userId ${args.userId}`
          )
        );
      }
    });

  return link;
};

const updateLink = async (
  _parent: unknown,
  args: { id: string; url: string; description: string },
  context: ContextType
) => {
  const link = await context.prisma.link.update({
    where: {
      id: parseInt(args.id),
    },
    data: {
      url: args.url,
      description: args.description,
    },
  });

  if (!link) return undefined;

  return link;
};

const deleteLink = async (
  _parent: unknown,
  args: { id: string },
  context: ContextType
) => {
  const link = await context.prisma.link.delete({
    where: {
      id: parseInt(args.id),
    },
  });

  if (!link) return undefined;

  return link;
};

export const linkQueries = {
  getFeed,
  getLinkById,
};

export const linkMutations = {
  createLink,
  updateLink,
  deleteLink,
};
