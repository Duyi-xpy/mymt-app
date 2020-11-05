const express = require("express");
const { models } = require("../../mydb/dbcon");
const router = express.Router();
const {
  searchHotWords,
  resultsByKeywords,
  nav,
  getPosition,
  recents,
  province,
  hot,
  cityList,
  goodsList,
  classify,
} = require("../../service/interfaceService");

router.get("/searchHotWords", (req, res) => {
  res.send(searchHotWords);
});

router.get("/resultsByKeywords", (req, res) => {
  res.send(resultsByKeywords);
});

router.get("/nav", (req, res) => {
  res.send(nav);
});

router.get("/getPosition", (req, res) => {
  res.send(getPosition);
});

router.get("/recents", (req, res) => {
  res.send(recents);
});

router.get("/province", (req, res) => {
  res.send(province);
});

router.get("/hot", (req, res) => {
  res.send(hot);
});

router.get("/cityList", (req, res) => {
  res.send(cityList);
});

router.get("/goodsList", (req, res) => {
  res.send(goodsList);
});

router.get("/classify", (req, res) => {
  res.send(classify);
});
module.exports = router;
