const Token = require("../models/models").Token;

class TokenRepository {
  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({
      where: { userId },
    });
    console.log(tokenData);
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ userId, refreshToken });
    return token;
  }
}

module.exports = new TokenRepository();
