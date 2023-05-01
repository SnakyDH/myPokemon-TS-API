import { Router } from "express";
import { getMyPokemon } from "../controllers/poke.controller";

const router: Router = Router();

router.get("/", getMyPokemon);

export default router;
