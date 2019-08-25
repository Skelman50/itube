import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import flash from "express-flash";
import { userRouter } from "./routers/userRouter";
import { videoRouter } from "./routers/videoRouters";
import { globalRouter } from "./routers/globalRouter";
import { routes } from "./routes";
import { localsMiddleware } from "./middleware";

dotenv.config();

import "./passport";
import { apiRouter } from "./routers/apiRouter";

const app = express();

const CookieStore = MongoStore(session);

app.set("view engine", "pug");

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
// app.use(morgan('dev'))

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export { app };
