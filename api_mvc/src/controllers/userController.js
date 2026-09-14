const { User } = require("../models")

exports.getAll = async (req, res) => {
    const users = await User.findAll()
    res.json(users)
}
