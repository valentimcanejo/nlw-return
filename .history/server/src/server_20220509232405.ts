import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP SERVEr");
});
