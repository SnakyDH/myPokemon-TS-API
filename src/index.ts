import express, { Express } from "express";
import pokeRouter from "./routes/poke.routes";

const app: Express = express();
const port: number = Number(process.env.PORT) | 3000;

app.use("/api", pokeRouter);

app.listen(port, () =>
  console.log(`Express listening at http://localhost:${port}`)
);
