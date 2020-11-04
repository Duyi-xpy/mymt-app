const sequelize = require("./dbcon");
const { DataTypes } = require("sequelize");

const Menutype = sequelize.define(
  "t_menutype",
  {
      stype:{
          type:DataTypes.STRING,
          allowNull:false
      },
      name:{
          type:DataTypes.STRING,
          allowNull:false
      },
      who_in_logged:{
          type:DataTypes.STRING,
          allowNull:false
      }
  },
  {
    tableName: "t_menutype",
    createdAt: "when_in_logged",
    updatedAt: "when_operated",
    deletedAt: "when_cancelled",
    paranoid: true,
  }
);

module.exports = Menutype
