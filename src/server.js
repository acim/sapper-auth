import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import morgan from "morgan";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const getUser = req => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    let decoded;
    try {
      decoded = jwt.verify(token, "4TvMZCZoBWfRrbK2e6xSIOoC1leN7pX9"); // FIXME: Get secret key from configuration
    } catch (err) {
      console.log(err);
    }

    if (decoded) {
      return { username: decoded.username };
    }
  }
};

express()
  .use(express.json(), cookieParser(), morgan("short"), (req, res, next) => {
    req.user = getUser(req);
    next();
  })
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
