const { constants } = require("../constants");
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: error.message,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: error.message,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: error.message,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: error.message,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error",
        message: error.message,
      });
      default:
        console.log("No error all clean")
      break;
  }
};
module.exports = errorHandler;
