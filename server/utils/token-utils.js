class TokenUtils {
  static addTokenInCookie(response, payload) {
    response.cookie("refreshToken", payload, {
      maxAge: 30 * 24 * 60 * 3600,
      httpOnly: true,
    });
  }
}

module.exports = TokenUtils;
