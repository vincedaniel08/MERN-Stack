const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://bit:bit@bit.4sebd.mongodb.net/mernpractice?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) =>{
        if (err) {
            res.json(err);
        }else {
            res.json(result);
        }
    })
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3000, () => {
  console.log("Server Runs Perpectly!");
});
