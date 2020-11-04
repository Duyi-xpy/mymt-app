const sequelize = require("./dbcon");
const {  DataTypes } = require("sequelize");

/**
 * querywords 查询关键词
 * queries 查询次数
 */
const SearchHot = sequelize.define(
  "t_searchhot",
  {
    querywords: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    queries: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "t_searchhot",
    createdAt: "when_in_logged",
    updatedAt: "when_operated",
    deletedAt: "when_cancelled",
    paranoid: true,
  }
);

module.exports = SearchHot;
