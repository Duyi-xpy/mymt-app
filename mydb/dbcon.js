// 数据模型 建立 数据连接
const { Sequelize } = require("sequelize");
/**
 * sequelize 参数   
 *    数据库实例名， 用户名，密码
 *    参数配置
 * 
 */
const sequelize = new Sequelize("st_hl", "root", "tchsys", {
    host:"localhost",
    dialect:"mysql",
});

module.exports = sequelize;

