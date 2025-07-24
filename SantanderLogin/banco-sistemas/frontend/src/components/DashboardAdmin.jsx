import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardAdmin = ({ user }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/admin/usuarios", { headers: { Authorization: `Bearer ${user.token}` } })
      .then(res => setUsuarios(res.data))
      .catch(() => {});
  }, [user.token]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Painel do Administrador</h1>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Usuários Cadastrados:</h2>
        <ul className="list-disc pl-6">
          {usuarios.map(u => <li key={u.id_usuario}>{u.nome} ({u.email})</li>)}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAdmin;
