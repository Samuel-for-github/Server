import  express  from "express";
import userRouter from "./routes/users.js"
import {config}from "dotenv";


export const app = express();

config({
    path: "./data/config.env"
})

app.use(express.json())
app.use(userRouter)



app.get("/", (req, res)=>{
    res.send("Nice")
})



