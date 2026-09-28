const { User } = require("../models");

exports.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Erro ao procurar usuários", error: error.message });
    }
};
const crypto = require("crypto");

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const user = await User.findOne({
            where: {
                email: email,
                senha: senha
            }
        });

        if (!user) {
            return res.status(401).json({
                mensagem: "Email ou senha incorreta"
            });
        }

        const token = crypto.randomUUID();

        return res.json({
            token,
            mensagem: "Login realizado com sucesso!"
        });

    } catch (error) {
        return res.status(500).json({
            mensagem: "Erro ao realizar login",
            error: error.message
        });
    }
};

exports.create = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios  user." });
        }

        // Salva o registro diretamente na tabela MySQL
        const user = await User.create({ nome, email, senha });

        res.status(201).json({ message: "Usuário cadastrado com sucesso!", token: "123456", user });

    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ message: "Erro ao salvar na base de dados", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        await user.destroy();
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar usuário", error: error.message });
    }
};