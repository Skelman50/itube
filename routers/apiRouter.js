import express from "express";
import { routes } from "../routes";
import { registerView, postAddComment } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, registerView);
apiRouter.post(routes.addComment, postAddComment);

export { apiRouter };
