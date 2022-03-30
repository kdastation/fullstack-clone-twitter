const User = require("../models/models.js").User;
const UserService = require("../services/user-service");

//TODO : Доделать
class UserController {
  async registration(request, response, next) {
    try {
      const { email, password } = request.body;
      const data = await UserService.registration(email, password);
      response.cookie("refreshToken", data.tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 3600,
        httpOnly: true,
      });
      return response.json(data);
    } catch (error) {
      next(error);
    }
  }
  async login(request, response, next) {
    try {
    } catch (error) {}
  }
  async logout(request, response, next) {
    try {
    } catch (error) {}
  }
  async getUsers(request, response, next) {
    try {
    } catch (error) {}
  }
}

module.exports = new UserController();
