import express from "express"
import morgan from "morgan"
import cors from 'cors'
import cookieParser from "cookie-parser"
import { connectMongo } from './database/db.js'
import indexRouter from './routes/index.routes.js'

export const app = express()
connectMongo()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cookieParser());
app.use(cors());

app.use(indexRouter)

app.get("/", (req, res) => res.status(200).send(`
    <div
        style="display: flex; justify-content: center; justify-items: center; min-height: 100vh;width: 100%; background-color: bisque;">
        <h1>Api | epicJourney</h1>
    </div>
`))