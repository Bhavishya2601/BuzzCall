import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import {nanoid} from "nanoid";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    console.log('hello')
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    
    try{
        const auth = getAuth(req);
        console.log(auth)
        if (!auth.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        
    } catch (err){

    }
}