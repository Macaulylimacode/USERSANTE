const pool = require("../config/db");

exports.getSaldo = async (req, res) => {
  try {
    const query = `
      SELECT saldo FROM Contas WHERE id_usuario = $1
    `;
    const result = await pool.query(query, [req.user.id]);
    res.json({ saldo: result.rows[0]?.saldo || 0 });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.listarUsuarios = async (req, res) => {
  if (req.user.tipo !== "admin") return res.status(403).json({ erro: "Acesso restrito" });

  try {
    const result = await pool.query("SELECT id_usuario, nome, email FROM Usuarios");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
