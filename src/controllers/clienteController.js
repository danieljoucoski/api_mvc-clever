const { User } = require("../models");

exports.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Erro ao procurar usuários", error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const {cliente_cpf, cliente_nome, cliente_idade, cliente_endereco, cliente_bairro, cliente_contato} = req.body;

        if (!cliente_cpf || !cliente_nome || !cliente_idade || !cliente_endereco || !cliente_bairro || !cliente_contato) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios." });
        }

        // Salva o registro diretamente na tabela MySQL
        const user = await User.create({cliente_cpf, cliente_nome, cliente_idade,cliente_endereco, cliente_bairro,cliente_contato});

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