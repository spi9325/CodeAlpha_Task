import { Router } from "express";
import prisma from "../lib/client.js";
import { verifyUser } from "../middleware/verifyUser.js";

export const getLike = Router();

getLike.get("/like",verifyUser, async (req, res) => {
  try {
        const like = await prisma.like.findMany(where:{
            userId:req.id!
        });
        
        if(like){
            res.status(200).json({like});
        }else{
            res.status(500).json({error:"internal server error"})
        }
  } catch (error) {
    console.log(error);
  }
});
