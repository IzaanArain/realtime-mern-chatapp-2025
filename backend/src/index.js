import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser);

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.get("/",(req,res)=>{
    res.send(`<h1>Server is Running<h1>`)
})

let PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on PORT http://localhost:${PORT}`);
    connectDB();
});