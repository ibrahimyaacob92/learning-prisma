import express, { Request, Response } from "express";

const router = express.Router();
import { PrismaClient } from "@prisma/client";

const { user } = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const users = await user.findMany({
    select: {
      username: true,
      posts: true,
    },
  });
  users.forEach((item: { [key: string]: any }) => {
    item.jenking = "dogma";
  });
  console.log(users);
  res.json(users);
});

router.post("/", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const userExist = await user.findUnique({
      where: {
        username,
      },
      select: {
        username: true,
      },
    });
    if (userExist) {
      return res.status(404).json({
        msg: "user already exist",
      });
    }

    const newUser = await user.create({
      data: {
        username,
      },
    });

    res.json(newUser);
  } catch (error) {}
});

module.exports = router;
