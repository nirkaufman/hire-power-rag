import {defineEventHandler} from "h3";
import prisma from "../services/db";

export default defineEventHandler(async (event) => {
  return prisma.user.findMany();
});
