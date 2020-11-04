const ShoppingCarts = require("../mydb/ShoppingCart");
const { getErr, getResult } = require("./getSendResult");

//数据格式
/**
 shoppingList:
 [{
     stype:"水果",
     goods:"富士山->苹果",
     price:10,
     cnt:2,
     unit:"斤",
     status:1,
     shoppingdate:sysdate,
     factory:"广西富士山",
     tel:"15659414657",
 },
 {
     stype:"水果",
     goods:"富士山->香蕉",
     price:5,
     cnt:3,
     unit:"斤",
     status:0,
     shoppingdate:sysdate,
     factory:"广西富士山",
     tel:"15659414657",
 },
]

 */

async function addShopping(shoppingInfo) {
  if (!Array.isArray(shoppingInfo)) {
    return getErr("100", " data typeof error");
  }

  const result = ShoppingCarts.bulkCreate(shoppingInfo);
  return getResult(" shopping success!");
}

// 查询商品购物车列表
async function getShoppingInfo(tel) {
  if (tel == undefined || tel == null) {
    return getErr("100", "tel is not null");
  }
  const result = ShoppingCarts.findAndCountAll({
    where: { tel, status: 0 },
    attributes: [
      "stype",
      "goods",
      "price",
      "cnt",
      "unit",
      "factory",
      "when_in_logged",
    ],
  });
  console.log(result);
  return result;
}
async function update(shoppingInfo) {
  if (!Array.isArray(shoppingInfo)) {
    return getErr("100", " data typeof error");
  }
  shoppingInfo.forEach(async (ele) => {
    const result = await ShoppingCarts.update(
      { ...ele },
      {
        where: {
          stype: ele.stype,
          tel: ele.tel,
          goods: ele.goods,
          status: 0,
        },
      }
    );
  });
  return getResult(" shopping success!");
  
}

exports.getShoppingInfo = getShoppingInfo;
exports.addShopping = addShopping;
exports.update = update;