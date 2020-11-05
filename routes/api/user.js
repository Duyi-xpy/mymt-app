const express = require("express");
const { model } = require("../../mydb/dbcon");
const router = express.Router();
const userServ = require("../../service/userService");
const { asyncHandler } = require("../getSendResult");

router.post("/login", async (req, res) => {
    console.log(req.body);

    res.send("2");
  
});

router.get("/login", async (req, res) => {
    console.log(req);
    console.log(req.query);
    console.log(req.body);
    res.send("2");
  
});

module.exports = router;
