// 0.0 import express from express you get it ?
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

// 0.1 express = app if you call app you also call express - do you know what I am say ?
const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config()
app.use(cors())
app.use(express.json()) // allows us to accept JSON data in the req.body
app.use("/api/products", productRoutes)


// use a Postman aplication !!!

// for open in 5000 port do you understand ?
app.listen(PORT, () => { connectdb(); console.log("Server started at http://localhost:" + PORT); })