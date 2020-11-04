const sequelize = require("./dbcon");
const { DataTypes } = require("sequelize");

// 定义 数据模型  管理员表
const Admin = sequelize.define(
  "t_admins",
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "t_admins",
    createdAt: "when_in_logged",
    updatedAt: "when_operated",
    deletedAt: "when_cancelled",
    paranoid: true, 
  }
);


module.exports = Admin;