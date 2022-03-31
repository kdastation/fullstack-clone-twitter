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
    const tokens = await TokenService.generateTokensAndSave(user.id, {
      id: user.id,
      email: user.email,
    });
    return {
      user,
      tokens,
    };
  }

  async login(email, password) {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      throw ApiError.BadRequest(`Пользователь с таким ${email} не найден`);
    }
    const isPasswordCorrectly = password === user.password;
    if (!isPasswordCorrectly) {
      throw ApiError.BadRequest("Пароль не верный");
    }
    const tokens = await TokenService.generateTokensAndSave(user.id, {
      id: user.id,
      email: user.email,
    });
    return {
      user,
      tokens,
    };
  }

  async logout(refreshToken) {
    await tokenRepository.deleteTokenUser(refreshToken);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const tokenData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await tokenRepository.findToken(refreshToken);
    if (!tokenData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserRepository.getUserByEmail(tokenData.email);
    const tokens = await TokenService.generateTokensAndSave(user.id, {
      id: user.id,
      email: user.email,
    });
    return {
      user,
      tokens,
    };
  }
}

module.exports = new UserService();
