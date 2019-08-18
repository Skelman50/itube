import express from 'express'
import { routes } from '../routes';
import { videoHome, videoSearch } from '../controllers/videoController';
import {  logOut, getJoin, postJoin, getLogin, postLogin } from '../controllers/userController';

const globalRouter = express.Router()

globalRouter.get(routes.join, getJoin)
globalRouter.post(routes.join, postJoin)

globalRouter.get(routes.home, videoHome)
globalRouter.get(routes.login, getLogin)
globalRouter.post(routes.login, postLogin)
globalRouter.get(routes.logout, logOut)
globalRouter.get(routes.search, videoSearch)

export { globalRouter }