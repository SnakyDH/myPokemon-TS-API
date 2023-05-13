import { Router } from "express";
import { getMyPokemon } from "../controllers/poke.controller";
import { verifyQuery } from "../middlewares/poke.middleware";

const router: Router = Router();

router.get("/:name", verifyQuery, getMyPokemon);

export default router;
