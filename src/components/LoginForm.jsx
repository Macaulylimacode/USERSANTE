import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("usuario");

  const handleLogin = () => {
    if (email && senha) {
      onLogin({ email, tipo });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Login do Sistema Bancário</h2>
      <select
        className="w-full border p-2 mb-4"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="usuario">Usuário</option>
        <option value="admin">Administrador</option>
      </select>
      <input
        type="email"
        className="w-full border p-2 mb-4"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full border p-2 mb-4"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
  );
};

export default LoginForm;
