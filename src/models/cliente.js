const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Cliente', {
    cliente_cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_idade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_contato: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Cliente;