import "./env";
import { prisma } from "./prisma";

async function cleanPrismaDB() {
  await prisma.link.deleteMany({ where: {} });
  await prisma.user.deleteMany({ where: {} });
}

beforeEach(cleanPrismaDB);
afterAll(cleanPrismaDB);
