import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) =>{

  const authorization = req.get("Authorization");

  console.log(authorization)
  
  let token = "";
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.split(" ")[1];
  }
  let decodedToken: { id?: string } = {};
  try {
    decodedToken = jwt.verify(token, 'cccc' as string) as { id?: string };
  } catch {}

  if (!token || !decodedToken.id) {
    return res.status(401).send("Debe iniciar sesión.");
  }

  next();
};
