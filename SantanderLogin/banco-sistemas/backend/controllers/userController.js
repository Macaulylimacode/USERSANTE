const pool = require("../config/db");

// Consulta saldo do usuário
exports.getSaldo = async (req, res) => {
  if (req.user.tipo !== "usuario") return res.status(403).json({ erro: "Apenas usuários podem acessar" });
  const result = await pool.query("SELECT saldo FROM Contas WHERE id_usuario = $1", [req.user.id]);
  res.json({ saldo: result.rows[0]?.saldo || 0 });
};

// Listagem de usuários (ADM)
exports.listarUsuarios = async (req, res) => {
  if (req.user.tipo !== "admin") return res.status(403).json({ erro: "Acesso restrito" });
  const result = await pool.query("SELECT id_usuario, nome, email FROM Usuarios");
  res.json(result.rows);
};
