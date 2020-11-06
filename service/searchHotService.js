const SearchHot = require("../mydb/SearchHot");
const { getErr, getResult } = require("./getSendResult");

async function getSearchHotInfo() {
  const res = await SearchHot.findAll({
    limit: 5,
    order: [["queries", "DESC"]],
    attributes: ["querywords"],
  });
  
  return getResult(res.map(ele=>{
    return ele.querywords
  }));
}

exports.getSearchHotInfo = getSearchHotInfo;
