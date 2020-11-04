const md5 = require("md5");
const Admin = require("../mydb/Admin");

/**
 * addAdmin 添加
 * deleteAdmin 删除
 * updateAdmin 更新
 * login 登录
 *
 */
exports.addAdmin = async function (adminobj) {
  adminobj.loginPwd = md5(adminobj.loginPwd);
  const res = await Admin.create(adminobj);
  return res.toJSON();
};
