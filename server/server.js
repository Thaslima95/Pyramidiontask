const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const { readdirSync } = require("fs");
// const { readdirSync } = require("fs");
require("dotenv").config();
const movierouter=require("./Routes/movierouter")

// app
const app = express();

const router = express.Router();

// import routes
// const authRoutes = require("./Routes/auth");

//db

mongoose.connect(process.env.DATABASE);


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));




app.listen(process.env.PORT,()=>{
    console.log("Backend Sever")
})




