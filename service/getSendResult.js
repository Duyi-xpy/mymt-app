exports.getErr = function (code = 500, err = "sever error") {
  return {
    status: "error",
    msg: err,
  };
};

exports.getResult = function (result) {
  return {
    status: "success",
    msg: "成功",
    data: result,
  };
};

exports.asyncHandler = (hander) => {
  return async (req, res, next) => {
    try {
      const result = await hander(req, res, next);
      res.send(exports.getResult(result));
    } catch (error) {
      next(error);
    }
  };
};
