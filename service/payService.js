const Pay = require("../mydb/pay");
const ShoppingCarts = require("../mydb/ShoppingCart");
const { getErr, getResult } = require("./getSendResult");
const UUID = require("uuid");
const dayjs = require("dayjs");

async function createPay(shoppingInfo, tel) {
  // 1 生成订单信息
  const payid = createPayId();
  const totalPrice = 10086;
  const date = new Date().getTime();
  //   console.log(shoppingInfo);
  shoppingInfo.forEach(async (ele) => {
    const result = await ShoppingCarts.update(
      {
        payid,
        status: 1,
        shoppingdate: date,
      },
      {
        where: {
          id: ele.id,
        },
      }
    );
  });

  const payInfo = await Pay.create({
    tel,
    total: totalPrice,
    stype: "微信",
    payid,
  });
  return getResult(payInfo.payid);
}

function createPayId() {
  return UUID.v1();
}

async function getMyTicket(tel) {
  const result = await Pay.findAndCountAll({
    where: {
      tel,
    },
    attributes: ["id", "tel", "total", "stype", "when_in_logged", "payid"],
  });

  const isr = JSON.parse(JSON.stringify(result));

  isr.rows.forEach((ele) => {
    const shoplist = (ele.when_in_logged = dayjs(ele.when_in_logged).format(
      "YYYY-MM-DD HH:mm:ss"
    ));
  });
  return isr;
}

async function getTicketShopList(payid) {
  const result = await ShoppingCarts.findAndCountAll({
    where: {
      payid,
    },
  });
  return result;
}

exports.createPay = createPay;
exports.getMyTicket = getMyTicket;
exports.getTicketShopList = getTicketShopList;
