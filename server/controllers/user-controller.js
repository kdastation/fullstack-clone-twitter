const User = require("../models/models.js").User;
const UserService = require("../services/user-service");

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
      return response.json([12312312, 312, 31, 321, 312, 31, 3]);
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
