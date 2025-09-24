import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import prisma from "../lib/client.js";


export const likePost = Router();

likePost.post("/comment",verifyUser,async(req,res)=>{
    try {
        const {postId} = req.body;
        if(!postId) return res.status(403).send("provide some like data...")
        await prisma.like.create({
            data:{
            userId:req.id?.toString()!,
            postId
            }
        })
        res.status(200).send("like added...");
    } catch (error) {
        console.log(error);
    }
})