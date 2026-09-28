const { Cliente } = require("../models");

exports.getAll = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao procurar usuários", error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const {cliente_cpf, cliente_nome, cliente_idade, cliente_endereco, cliente_bairro, cliente_contato} = req.body;

        if (!cliente_cpf || !cliente_nome || !cliente_idade || !cliente_endereco || !cliente_bairro || !cliente_contato) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios  clliente." });
        }

        // Salva o registro diretamente na tabela MySQL
        const cliente = await Cliente.create({cliente_cpf, cliente_nome, cliente_idade,cliente_endereco, cliente_bairro, cliente_contato});

        res.status(201).json({ message: "Usuário cadastrado com sucesso!", cliente });
           
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ message: "Erro ao salvar na base de dados", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        await cliente.destroy();
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar usuário", error: error.message });
    }
};