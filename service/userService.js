const md5 = require("md5");
const User = require("../mydb/User");
const {getErr,getResult} = require("./getSendResult")



// 通过用户账号获取 用户信息是否存在
async function getUserByTel(tel) {

  const res = await User.findOne({ where: { tel } });
  // 通过手机号码进行查询
  if (res) {
    return true;
  }
  return null;
}
/**
 * addObj {tel:"1",spwd:""}
 * 用户名,密码
 */
async function addUser(addObj) {
  addObj.spwd = md5(addObj.spwd);
  //校验数据库内是否存在 对应注册信息 已经存在返回， 未注册直接注册
  const single = await getUserByTel(addObj.tel);
  if (!single) {
    const result = await User.create(addObj);
    return getResult("add user success ");
  }
  return getErr('100','username is exits!');
}

async function login(username, password) {
  var md5pass = md5(password);
  //校验用户名是否存在
  if (username == "") {
    return getErr('100','username is not allow null !!');
  }
  const userExists = await getUserByTel(username);
  if (userExists == null) {
    return getErr('100','username is not exits!');
  }

  const psw = await User.findOne({
    where: {
      tel: username,
      spwd: md5pass,
    },
  });
  return getResult(psw.toJSON());
  // 密码校验
}

/*login("15659414657", "c153").then((data) => {
  console.log(data);
});*/

exports.addUser = addUser;
exports.login = login;

/*
test方法
addUser({
  tel: "15659414657",
  spwd: "c153",
}).then((data) => {
  console.log(data);
});


*/
