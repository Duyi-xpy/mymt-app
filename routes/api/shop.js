const express = require("express");
const router = express.Router();
const shopping = require("../../service/shoppingService");

router.get("/info", async (req, res) => {

  const result = await shopping.getShoppingInfo(req.query.tel);
  res.send(result);
});

router.post("/add", async (req, res) => {

  const result = await shopping.addShopping(req.body.shoplist);
  res.send(result);
});


router.post("/update", async (req, res) => {
    
    const result = await shopping.update(req.body.shoplist);
    res.send(result);
  });

module.exports = router;
