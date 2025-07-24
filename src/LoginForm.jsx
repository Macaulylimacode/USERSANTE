import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("usuario");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        senha,
        tipo,
      });

      localStorage.setItem("token", res.data.token);
      onLogin({ email, tipo, token: res.data.token });
    } catch (err) {
      setErro("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <select className="w-full border p-2 mb-4" onChange={(e) => setTipo(e.target.value)}>
        <option value="usuario">Usuário</option>
        <option value="admin">Administrador</option>
      </select>
      <input
        type="email"
        className="w-full border p-2 mb-2"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full border p-2 mb-2"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      {erro && <p className="text-red-500 mb-2">{erro}</p>}
      <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
};

export default LoginForm;
