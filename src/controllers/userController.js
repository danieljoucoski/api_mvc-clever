const { User } = require("../models");

//get all users
exports.getAll = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

//Post new user
exports.create = async (req, res) => {
    const { nome, email, senha } = req.body;
    const user = await User.create({ nome, email, senha })
    res.json(user);
}

//delete user by id
exports.delete = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({ message: "Usuario não encontrado" })
    }

    await user.destroy();
    res.json({ message: "Usuario deletado com sucesso" });
}