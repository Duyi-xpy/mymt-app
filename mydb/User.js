const sequelize = require("./dbcon");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "t_user",
  {
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /*,
    "name": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "pid": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "dob": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "gender": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "nation": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "station_no": {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    "zxbz": {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }*/
  },
  {
    tableName: "t_user",
    createdAt: "when_in_logged",
    deletedAt: "when_cancelled",
    updatedAt: "when_operated",
  }
);

module.exports = User;
