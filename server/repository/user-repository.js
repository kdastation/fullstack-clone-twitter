const User = require("../models/models").User;

class UserRepository {
  async getUserByEmail(email) {
    console.log("EMAIL THIS", email);
    const user = await User.findOne({
      where: { email },
    });
    return user;
  }

  async createUser(email, password) {
    const user = await User.create({ email, password });
    return user;
  }
}

module.exports = new UserRepository();
