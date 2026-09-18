const sequelize = require("../config/database");
const User = require("./user");

sequelize.sync();

module.exports = {
    sequelize,
    User
}