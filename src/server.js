import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import cookieParser from "cookie-parser";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
const FileStore = sessionFileStore(session);

express()
  .use(bodyParser.json(), cookieParser())
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: req => ({
        user: "Something I want"
      })
    })
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
