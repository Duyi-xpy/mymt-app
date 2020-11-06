const express = require("express");
const router = express.Router();
const searchHotServ = require("../../service/searchHotService");

router.get("/info", async (req, res) => {
  const result = await searchHotServ.getSearchHotInfo();
  res.send(result);
});

module.exports = router;
