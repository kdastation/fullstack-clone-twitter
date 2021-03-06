const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING, require: true },
});

const Post = sequelize.define("post", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT },
  img: { type: DataTypes.STRING, allowNull: true },
});

const Track = sequelize.define("track", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  audio: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Token);
Token.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Track);
Track.belongsTo(User);

module.exports = {
  User,
  Token,
  Post,
  Track,
};
