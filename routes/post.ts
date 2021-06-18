import express, { Request, Response } from "express";
import { PrismaClient } from ".prisma/client";

const { user, post } = new PrismaClient();
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { post: content, title, user_id } = req.body;
  // const userExist = await user.findUnique({
  //   where: {
  //     id: user_id,
  //   },
  // });
  // if (!userExist) {
  //   return res.status(400).json({
  //     msg: "user not found",
  //   });
  // }

  const newPost = await post.create({
    data: {
      title,
      post: content,
      user_id,
    },
  });
  res.json(newPost);
});

router.get("/:user_id", async (req: Request, res: Response) => {
  const users = await post.findMany({
    where: {
      user_id: parseInt(req.params?.user_id),
    },
    select: {
      title: true,
      post: true,
      user: { include: { profession: true } },
      user_id: true,
      created_at: true,
    },
    // ? To go nested
    // include: {
    //   user: {
    //     select: {
    //       profession: true,
    //     },
    //   },
    // },
  });
});

module.exports = router;
