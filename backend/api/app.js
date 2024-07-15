//file that will run out express app

import express from "express";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv";

dotenv.config();

//create app
const app = express();
app.use(express.json())
app.use(cookieParser())

// //making a test api
// app.use("/api/test", (req,res)=>{
//     res.send("working")
// } )

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

//need a port number to run app
app.listen(8800, ()=> {
    console.log("Server is running");
} );