import { Request, Response, NextFunction } from "express";

const verifyQuery = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params;
  if (name === undefined) {
    return res.status(400).json({ message: "Bad Request" });
  }
  next();
};

export { verifyQuery };
