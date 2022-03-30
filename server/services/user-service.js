const tokenRepository = require("../repository/token-repository");
const UserRepository = require("../repository/user-repository");
const TokenService = require("./token-service");

class UserService {
  async registration(email, password) {
    const candidate = await UserRepository.getUserByEmail(email);
    if (candidate) {
      throw new Error(`Пользователь с таким ${email} уже существует`);
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
}

module.exports = new UserService();
