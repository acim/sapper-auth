import sirv from "sirv";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import * as sapper from "@sapper/server";
import session from "express-session";
import sessionFileStore from "session-file-store";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
const FileStore = sessionFileStore(session);

express()
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    bodyParser.json(),
    session({
      secret: "conduit",
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 31536000
      },
      store: new FileStore({
        path: "/tmp/sessions"
      })
    }),
    sapper.middleware({
      session: req => ({
        user: req.session && req.session.user
      })
    })
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
