const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/login", authController.login);
router.get("/saldo", authMiddleware, userController.getSaldo);
router.get("/admin/usuarios", authMiddleware, userController.listarUsuarios);
module.exports = router;
