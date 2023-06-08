import { db } from "@/database/db";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      console.log("aqui")
      return await login(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const login = async (req: NextApiRequest,res: NextApiResponse) => {
  try {
    
    const { username } = req.body

    const results = await db.query(`SELECT * FROM users WHERE user_name = '${username}'`);
    
    console.log(results)

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


