const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, senha, tipo } = req.body;

  try {
    const tabela = tipo === "admin" ? "AdministradorPrincipal" : "Usuarios";
    const query = `SELECT * FROM ${tabela} WHERE email = $1`;
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) return res.status(404).json({ erro: "Usuário não encontrado" });

    const usuario = result.rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaValida) return res.status(401).json({ erro: "Senha incorreta" });

    const token = jwt.sign({ id: usuario.id_usuario || usuario.id_admin, tipo }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
