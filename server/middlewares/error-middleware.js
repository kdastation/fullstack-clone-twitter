const ApiError = require("../exceptions/api-error");

const ErrorMiddleware = (error, request, response, next) => {
  if (error instanceof ApiError) {
    return response
      .status(error.status)
      .json({ message: error.message, errors: error.errors });
  }
  return response.status(500).json({ message: "Что то пошло не так..." });
};

module.exports = ErrorMiddleware;
