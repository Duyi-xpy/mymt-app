const sequelize = require("./dbcon");
const { DataTypes } = require("sequelize");
/*
    商品购物车表
    stype:所属类型，
    goods:商品名称 
    price:单价
    cnt:数量
    unit:商品单位(个，元，天)
    status:商品状态, 1 已购买，0未购买。
    when_in_logged:下单时间
    shoppingdate：购买时间
    factory:商品厂家
    tel:用户，用来关联具体个人下单信息

*/

const ShoppingCarts = sequelize.define(
  "t_shopping_carts",
  {
    stype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0.0,
    },
    cnt: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    unit: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0",
    },
    shoppingdate: {
      type: DataTypes.DATE,
    },
    factory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
    },
    payid: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "t_shopping_carts",
    createdAt: "when_in_logged",
    updatedAt: "when_operated",
    deletedAt: "when_cancelled",
    paranoid: true,
  }
);

module.exports = ShoppingCarts;
