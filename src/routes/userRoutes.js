const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();


router.get('/users', userController.getAll);
router.post('/users', userController.create);
router.delete('/users/:id', userController.delete);

module.exports = router;