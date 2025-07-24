import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import DashboardUser from "./components/DashboardUser";
import DashboardAdmin from "./components/DashboardAdmin";

export default function App() {
  const [user, setUser] = useState(null);
  return user
    ? user.tipo === "admin"
      ? <DashboardAdmin user={user} />
      : <DashboardUser user={user} />
    : <LoginForm onLogin={setUser} />;
}
