const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;
const app = express();
const MONGO_URL = "mongodb+srv://Authentication:deepakkumar@cluster0.4tudk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Api Title creation
app.get("/", (req, res) => {
    res.json({message:"Authentication API creation done!!!"});
})

//router linking
app.use("/auth", require("./routes/user.route"));
app.use("/blog", require("./routes/blog.route"));

//server connection
app.listen((port), (req, res) => {
    console.log(`server up and running on port ${port}`);
});

//DB connection
mongoose.connect((MONGO_URL), {useNewUrlParser: true, useUnifiedTopology:true}, (err) => {
    if(!err){
        console.log("Database created successfully");
    }
});