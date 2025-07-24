import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardUser = ({ user }) => {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    const fetchSaldo = async () => {
      const res = await axios.get("http://localhost:3000/api/saldo", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setSaldo(res.data.saldo);
    };
    fetchSaldo();
  }, [user.token]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Bem-vindo, {user.email}</h1>
      <div className="bg-blue-100 p-4 rounded shadow">
        💰 Seu saldo: <strong>R$ {saldo !== null ? saldo.toFixed(2) : "Carregando..."}</strong>
      </div>
    </div>
  );
};

export default DashboardUser;
