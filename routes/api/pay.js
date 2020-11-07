const express = require("express");
const router = express.Router();
const pay = require("../../service/payService");


router.post("/pay", async (req, res) => {
  const result = await pay.createPay(req.body.shoplist, req.body.tel);
  res.send(result);
});

router.get("/getTicket", async (req, res) => {
  const result = await pay.getMyTicket(req.query.tel);
  res.send(result);
});

router.get("/getTicketShopList", async (req, res) => {
  const result = await pay.getTicketShopList(req.query.payid);
  res.send(result);
});


module.exports = router;
