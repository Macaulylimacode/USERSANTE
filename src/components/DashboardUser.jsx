import React from "react";

const DashboardUser = ({ user }) => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Bem-vindo, {user.email}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">💰 Ver Saldo</div>
        <div className="bg-green-100 p-4 rounded shadow">💸 Realizar Pagamento</div>
        <div className="bg-yellow-100 p-4 rounded shadow">📄 Gerar Extrato</div>
      </div>
    </div>
  );
};

export default DashboardUser;
