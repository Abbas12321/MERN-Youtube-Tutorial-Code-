const express = require("express");

const { logReqRes } = require("./middlewares/index");
const { connectMongoDB } = require("./connection");
const empsRoutes = require("./routes/emps");

const app = express();
const PORT = 8080;

connectMongoDB("mongodb://localhost:27017/empsData").then(() =>{
    console.log("MongoDB Connected");
});

// middleware
app.use(express.urlencoded({ extended:false }));
app.use(logReqRes("log.txt"));
app.use("/api/emps", empsRoutes);

app.listen(PORT, () =>{console.log(`server is running in ${PORT}`)})