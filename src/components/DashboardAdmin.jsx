import React from "react";

const DashboardAdmin = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Painel do Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow">👥 Gerenciar Usuários</div>
        <div className="bg-red-100 p-4 rounded shadow">📊 Relatórios (Acessos e LGPD)</div>
        <div className="bg-blue-100 p-4 rounded shadow">📂 Ver Transações</div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
