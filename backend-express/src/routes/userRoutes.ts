import { Router, Request, Response } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  res.json([{ id: 1, test: "wheee" }]);
});
// this is where i make my endpoints ok.

export default router;
