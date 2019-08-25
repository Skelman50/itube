import express from "express";
import { routes } from "../routes";
import { registerView } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, registerView)

export { apiRouter };
