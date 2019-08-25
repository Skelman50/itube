import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStraategy from "passport-facebook";
import dotenv from "dotenv";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback
} from "./controllers/userController";
import { routes } from "./routes";

dotenv.config();

passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCB}`
    },
    githubLoginCallback
  )
);

// passport.use(new FacebookStraategy(
//   {
//     clientID: process.env.FB_ID,
//     clientSecret: process.env.FB_SECRET,
//     callbackURL: `http://localhost:4000${routes.facebookCB}`,
//     profileFields: ['id', 'displayName', 'photos', 'email'],
//     scope: ['public_profile', 'email']
//   },
//   facebookLoginCallback
// ))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
