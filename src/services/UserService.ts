import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default new (class UserService {
  async find(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
