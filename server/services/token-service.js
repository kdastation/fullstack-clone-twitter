const jwt = require("jsonwebtoken");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, "secret-key", { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, "secret-key", { expiresIn: "30d" });
    return {
      accessToken,
      refreshToken,
    };
  }
}

module.exports = new TokenService();
