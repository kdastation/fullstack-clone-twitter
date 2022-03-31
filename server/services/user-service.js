const ApiError = require("../exceptions/api-error");
const tokenRepository = require("../repository/token-repository");
const UserRepository = require("../repository/user-repository");
const TokenService = require("../services/token-service");

class UserService {
  async registration(email, password) {
    const candidate = await UserRepository.getUserByEmail(email);
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с таким ${email} уже существует`);
    }
    const user = await UserRepository.createUser(email, password);
    const tokens = TokenService.generateTokens({
      id: user.id,
      email: user.email,
    });
    await tokenRepository.saveToken(user.id, tokens.refreshToken);
    return {
      user,
      tokens,
    };
  }

  async login(email, password) {
    const user = await UserRepository.getUserByEmail(email);
    console.log("password", password);
    if (!user) {
      throw ApiError.BadRequest(`Пользователь с таким ${email} не найден`);
    }
    const isPasswordCorrectly = password === user.password;
    console.log("passwordTRU", isPasswordCorrectly);
    if (!isPasswordCorrectly) {
      throw ApiError.BadRequest("Пароль не верный");
    }
    const tokens = TokenService.generateTokens({
      id: user.id,
      email: user.email,
    });
    console.log(tokens);
    await tokenRepository.saveToken(user.id, tokens.refreshToken);
    return {
      user,
      tokens,
    };
  }

  async logout(refreshToken) {
    await tokenRepository.deleteTokenUser(refreshToken);
  }
}

module.exports = new UserService();
