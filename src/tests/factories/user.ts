import { prisma } from "../../config/prisma";

export const userFactory = (overrides: Overrides = {}) => {
  const user = prisma.user.create({
    data: {
      name: overrides.name || "name",
      email: overrides.email || "email",
    },
  });

  return user;
};

type Overrides = {
  name?: string;
  email?: string;
  userId?: string;
};
