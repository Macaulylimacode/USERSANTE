const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", authController.login);
router.get("/saldo", authMiddleware, userController.getSaldo);
router.get("/admin/usuarios", authMiddleware, userController.listarUsuarios);

module.exports = router;
