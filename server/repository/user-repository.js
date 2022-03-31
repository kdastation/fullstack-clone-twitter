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

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

module.exports = new UserRepository();
