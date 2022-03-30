const ApiError = require("../exceptions/api-error");

const AuthMiddleware = (error, request, response, next) => {
  if (error instanceof ApiError) {
    return response
      .status(error.status)
      .json({ message: error.message, errors: error.errors });
  }
  return response.status(500).json({ message: "Что то пошло не так..." });
};

module.exports = AuthMiddleware;
