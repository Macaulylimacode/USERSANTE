const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, senha, tipo } = req.body;
  const tabela = tipo === "admin" ? "AdministradorPrincipal" : "Usuarios";
  const fieldId = tipo === "admin" ? "id_admin" : "id_usuario";
  const result = await pool.query(`SELECT * FROM ${tabela} WHERE email = $1`, [email]);
  if (!result.rows.length) return res.status(404).json({ erro: "Usuário não encontrado" });

  const user = result.rows[0];
  if (!await bcrypt.compare(senha, user.senha_hash)) {
    return res.status(401).json({ erro: "Senha incorreta" });
  }

  const token = jwt.sign({ id: user[fieldId], tipo }, process.env.JWT_SECRET, { expiresIn: "8h" });
  res.json({ token });
};
