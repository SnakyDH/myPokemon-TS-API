import express, { Express } from "express";

const app: Express = express();
const port: number = 3000;

app.listen(port, () =>
  console.log(`Express listening at http://localhost:${port}`)
);
