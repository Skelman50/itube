import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookiePaser from 'body-parser'
import { userRouter } from './routers/userRouter';
import { videoRouter } from './routers/videoRouters';
import { globalRouter } from './routers/globalRouter';
import { routes } from './routes';
import { localsMiddleware } from './middleware';

const app = express()

app.set('view engine', 'pug')

app.use('/uploads', express.static('uploads'))
app.use(express.static('public'))
app.use(cookiePaser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
// app.use(morgan('dev'))

app.use(localsMiddleware)

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export { app }
