import express from 'express'
import { routes } from '../routes';
import { videoHome, videoSearch } from '../controllers/videoController';
import { join, login, logOut } from '../controllers/userController';

const globalRouter = express.Router()

globalRouter.get(routes.home, videoHome)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logOut)
globalRouter.get(routes.search, videoSearch)

export { globalRouter }