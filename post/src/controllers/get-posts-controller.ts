import { Request, Response } from "express";
import { Post } from "../models/post";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});

    res.status(200).json([{ posts, message: "모든 글을 불러왔습니다." }]);
  } catch (error) {
    console.log(error);
  }
};
