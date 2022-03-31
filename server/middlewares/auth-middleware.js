const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token-service");

const AuthMiddleware = (request, response, next) => {
  try {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const tokenData = tokenService.validateAccessToken(accessToken);
    if (!tokenData) {
      return next(ApiError.UnauthorizedError());
    }
    request.user = tokenData;
    next();
  } catch (error) {
    next(ApiError.UnauthorizedError());
  }
};

module.exports = AuthMiddleware;
