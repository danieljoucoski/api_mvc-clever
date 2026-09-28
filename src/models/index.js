const sequelize = require("../config/database");
const User = require("./user");
const Cliente = require("./cliente");


sequelize.sync();

module.exports = {
    sequelize,
    User,
    Cliente
}