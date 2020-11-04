const mock = require("mockjs");
const User = require("../mydb/User");
const md5 = require("md5");

const data = mock.mock({
  "datas|10": [
    {
      "slogin_id|11": /[0-9]/,
      spwd: "abc123456",
      "name|": "@cname",
      "pid|18": /[0-9]/,
      dob: "@date('yyyy-mm-dd')",
      "gender|1-2": 1,
      nation: "汉族",
      "station_no|100-999": 100,
      "zxbz|0-1": 1,
    },
  ],
}).datas;

const newdata = data.map((ele, index) => {
  ele.spwd = md5(ele.spwd);
  return ele;
});

User.bulkCreate(newdata);
