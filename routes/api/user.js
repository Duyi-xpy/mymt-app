const express = require("express");

const router = express.Router();
const userServ = require("../../service/userService");


router.post("/login", async (req, res) => {

    const result = await userServ.login();
    res.send(result);
  
});

router.get("/login", async (req, res) => {
   
    const result = await userServ.login(req.query.tel,req.query.spwd);
    
    res.send(result);
});

router.post("/addUser", async (req, res) => {
   
    const result = await userServ.addUser(req.body.params);
    
    res.send(result);
});

module.exports = router;
