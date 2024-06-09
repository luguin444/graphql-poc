import { prisma } from "../../config/prisma";
import { userFactory } from "./user";

export const linkFactory = async (overrides: Overrides = {}) => {
  let userId;
  if (overrides.userId) {
    userId = parseInt(overrides.userId);
  } else {
    userId = (await userFactory()).id;
  }

  const link = prisma.link.create({
    data: {
      description: overrides.description || "description",
      url: overrides.url || "url",
      userId,
    },
  });

  return link;
};

type Overrides = {
  description?: string;
  url?: string;
  userId?: string;
};
