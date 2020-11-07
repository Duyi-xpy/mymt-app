const sequelize = require("./dbcon");
const { Datatypes, DataTypes } = require("sequelize");

/**
 * querywords 查询关键词
 * queries 查询次数
 */
const pay = sequelize.define(
  "t_pay_info",
  {
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "t_pay_info",
    createdAt: "when_in_logged",
    updatedAt: "when_operated",
    deletedAt: "when_cancelled",
    paranoid: true,
  }
);

module.exports = pay;
