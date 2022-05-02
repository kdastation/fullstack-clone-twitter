/* eslint-disable no-undef */
const { Sequelize } = require("sequelize");

// Для запуска вам необходимо установить настройки вашей базы данных

module.exports = new Sequelize(
  process.env.DB_NAME, // Имя базы данных.
  process.env.DB_USER, // Имя пользователя, которого вы указывали при создании базы.
  process.env.DB_PASSWORD, // Пароль от базы данных.
  {
    dialect: "postgres",
    host: process.env.DB_HOST, // Хост(по умолчанию localhost)
    port: process.env.DB_PORT, // Порт(по умолчанию 5432)
  }
);
