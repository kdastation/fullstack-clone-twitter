const jwt = require("jsonwebtoken");
const tokenRepository = require("../repository/token-repository");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, "secret-key", { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, "secret-key", { expiresIn: "30d" });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateRefreshToken(refreshToken) {
    try {
      const tokenData = jwt.verify(refreshToken, "secret-key");
      return tokenData;
    } catch (error) {
      return null;
    }
  }

  validateAccessToken(accessToken) {
    try {
      const tokenData = jwt.verify(accessToken, "secret-key");
      return tokenData;
    } catch (error) {
      return null;
    }
  }
  async generateTokensAndSave(userId, payload) {
    const tokens = this.generateTokens(payload);
    await tokenRepository.saveToken(userId, tokens.refreshToken);
    return tokens;
  }
}

module.exports = new TokenService();
