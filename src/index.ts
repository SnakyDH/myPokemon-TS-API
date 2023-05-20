import express, { Express } from "express";
import pokeRouter from "./routes/poke.routes";
import cors from "cors";
const app: Express = express();
const port: number = Number(process.env.PORT) | 3000;

var corsOptions = {
  origin: "https://my-pokemon-ts-react.vercel.app/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/api", cors(corsOptions), pokeRouter);

app.listen(port, () =>
  console.log(`Express listening at http://localhost:${port}`)
);
