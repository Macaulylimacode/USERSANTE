import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BancoInterface() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("usuario");
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    if (usuario && senha) setLogado(true);
  };

  const PainelUsuario = () => (
    <div className="grid gap-4">
      <Card>
        <CardContent className="p-4">Saldo atual: R$ 5.250,00</CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">Pagamento de contas</CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">Extrato de movimentações</CardContent>
      </Card>
    </div>
  );

  const PainelAdmin = () => (
    <div className="grid gap-4">
      <Card>
        <CardContent className="p-4">Lista de usuários e contas</CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">Relatórios de atividades</CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">Logs de acesso (LGPD)</CardContent>
      </Card>
    </div>
  );

  if (logado) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Painel do {perfil}</h1>
        {perfil === "admin" ? <PainelAdmin /> : <PainelUsuario />}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Login no Sistema Bancário</h2>
          <select
            value={perfil}
            onChange={(e) => setPerfil(e.target.value)}
            className="mb-4 w-full p-2 border rounded"
          >
            <option value="usuario">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
          <Input
            placeholder="E-mail"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="mb-4"
          />
          <Button className="w-full" onClick={handleLogin}>Entrar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
