const ShoppingCarts = require("../mydb/ShoppingCart");
const { getErr, getResult } = require("./getSendResult");

//数据格式
/**
 {shoplist:
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
]}

 */

async function addShopping(shoppingInfo) {
  console.log(shoppingInfo);
  if (!Array.isArray(shoppingInfo)) {
    return getErr("100", " data typeof error");
  }

  const result = ShoppingCarts.bulkCreate(shoppingInfo);
  if (result) {
    return getResult("添加购物车成功！");
  } else {
    return getErr("100", "data type of error ");
  }
}

// 查询商品购物车列表
async function getShoppingInfo(tel) {
  if (tel == undefined || tel == null) {
    return getErr("100", "tel is not null");
  }
  const result = ShoppingCarts.findAndCountAll({
    where: { tel, status: 0 },
    attributes: [
      "id",
      "stype",
      "goods",
      "price",
      "cnt",
      "unit",
      "factory",
      "when_in_logged",
    ],
  });
  // console.log(result);
  return result;
}
async function getShoppingInfoByQuery(query) {
  const result = ShoppingCarts.findAndCountAll({
    where: { ...query, status: 0 },
    attributes: [
      "id",
      "stype",
      "goods",
      "price",
      "cnt",
      "unit",
      "factory",
      "when_in_logged",
    ],
  });
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

async function del(shoppingInfo) {
  shoppingInfo.forEach(async (ele) => {
    const result = await ShoppingCarts.destroy({
      where: {
        id: ele.id,
      },
    });
  });
  if (result != null) {
    return getResult(" 删除成功!");
  }
}

exports.getShoppingInfo = getShoppingInfo;
exports.addShopping = addShopping;
exports.update = update;
exports.getShoppingInfoByQuery = getShoppingInfoByQuery;
exports.del = del;
