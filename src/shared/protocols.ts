import { PrismaClient } from "@prisma/client";

export type ContextType = {
  prisma: PrismaClient;
  req: Request;
  isAuthenticated: boolean;
};
