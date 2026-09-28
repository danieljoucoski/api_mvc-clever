const express = require("express");
const clienteController = require("../controllers/clienteController");
const router = express.Router();


router.get('/clientes', clienteController.getAll);
router.post('/clientes', clienteController.create);
router.delete('/clientes/:id', clienteController.delete);

module.exports = router;