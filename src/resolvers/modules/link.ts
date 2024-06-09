import { Link } from "@prisma/client";
import { prisma } from "../../config/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { GraphQLError } from "graphql";

const getFeed = async () => {
  const links = await prisma.link.findMany();

  return links.map((link) => serializeLink(link));
};

const getLinkById = async (_parent: unknown, args: { id: string }) => {
  const link = await prisma.link.findUnique({
    where: {
      id: parseInt(args.id),
    },
  });

  if (!link) return undefined;

  return serializeLink(link);
};

const createLink = async (
  _parent: unknown,
  args: { description: string; url: string; userId: string }
) => {
  const link = await prisma.link
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

  return link && serializeLink(link);
};

const updateLink = async (
  _parent: unknown,
  args: { id: string; url: string; description: string }
) => {
  const link = await prisma.link.update({
    where: {
      id: parseInt(args.id),
    },
    data: {
      url: args.url,
      description: args.description,
    },
  });

  if (!link) return undefined;

  return serializeLink(link);
};

const deleteLink = async (_parent: unknown, args: { id: string }) => {
  const link = await prisma.link.delete({
    where: {
      id: parseInt(args.id),
    },
  });

  if (!link) return undefined;

  return serializeLink(link);
};

const serializeLink = (link: Link) => {
  return {
    id: link.id.toString(),
    url: link.url,
    description: link.description,
    userId: link.userId.toString(),
  };
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
