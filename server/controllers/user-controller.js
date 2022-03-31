const User = require("../models/models.js").User;
const UserService = require("../services/user-service");
const TokenUtils = require("../utils/token-utils.js");

//TODO : Доделать
class UserController {
  async registration(request, response, next) {
    try {
      const { email, password } = request.body;
      const userData = await UserService.registration(email, password);
      TokenUtils.addTokenInCookie(response, userData.tokens.refreshToken);
      return response.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async login(request, response, next) {
    try {
      const { email, password } = request.body;
      const userData = await UserService.login(email, password);
      TokenUtils.addTokenInCookie(response, userData.tokens.refreshToken);
      return response.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async logout(request, response, next) {
    try {
      const { refreshToken } = request.cookies;
      await UserService.logout(refreshToken);
      response.clearCookie("refreshToken");
      return response.status(200).json({ message: "LOGOUT SUCCESS" });
    } catch (error) {
      next(error);
    }
  }
  async getUsers(request, response, next) {
    try {
    } catch (error) {}
  }
}

module.exports = new UserController();
