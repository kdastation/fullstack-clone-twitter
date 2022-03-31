const Token = require("../models/models").Token;

class TokenRepository {
  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({
      where: { userId },
    });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ userId, refreshToken });
    return token;
  }

  async deleteTokenUser(refreshToken) {
    await Token.destroy({
      where: { refreshToken },
    });
  }

  async findToken(refreshToken) {
    const token = await Token.findOne({
      where: { refreshToken },
    });
    return token;
  }
}

module.exports = new TokenRepository();
