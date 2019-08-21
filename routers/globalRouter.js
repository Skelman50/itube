import express from 'express'
import passport from 'passport'
import { routes } from '../routes'
import { videoHome, videoSearch } from '../controllers/videoController'
import {
  logOut,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin
} from '../controllers/userController'
import { onlyPublic, onlyPrivate } from '../middleware'

const globalRouter = express.Router()

globalRouter.get(routes.join, onlyPublic, getJoin)
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin)

globalRouter.get(routes.home, videoHome)
globalRouter.get(routes.login, onlyPublic, getLogin)
globalRouter.post(routes.login, onlyPublic, postLogin)
globalRouter.get(routes.logout, onlyPrivate, logOut)
globalRouter.get(routes.search, onlyPublic, videoSearch)

globalRouter.get(routes.github, githubLogin)
globalRouter.get(
  routes.githubCB,
  passport.authenticate('github', { failureRedirect: '/login' }),
  postGithubLogin
)

export { globalRouter }
