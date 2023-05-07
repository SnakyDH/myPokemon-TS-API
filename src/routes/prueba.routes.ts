import { Router } from "express";
import { prueba } from "../controller/prueba.controller";

const router: Router = Router();

router.get("/prueba", prueba);

export { router };
