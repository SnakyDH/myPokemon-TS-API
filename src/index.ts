import express, { Express } from "express";
import { router } from "./routes/prueba.routes";

const app: Express = express();
const port: number = 3000;

app.use(router);

app.listen(port, () =>
  console.log(`Express listening at http://localhost:${port}`)
);
