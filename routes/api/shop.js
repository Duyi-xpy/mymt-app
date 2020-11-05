const express = require("express");
const router = express.Router();
const shopping = require("../../service/shoppingService");

router.get("/info", async (req, res) => {
  const result = await shopping.getShoppingInfo(req.query.tel);
  res.send(result);
});

router.post("/find", async (req, res) => {
  const result = await shopping.getShoppingInfoByQuery(req.body);
  res.send(result);
  
});

router.post("/add", async (req, res) => {
  // console.log(req.body.shoplist);
  // res.send("1")
  const result = await shopping.addShopping(req.body.shoplist);
  res.send(result);
});

router.post("/update", async (req, res) => {
  const result = await shopping.update(req.body.shoplist);
  res.send(result);
});

module.exports = router;
