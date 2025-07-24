import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import DashboardUser from "./components/DashboardUser";
import DashboardAdmin from "./components/DashboardAdmin";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginForm onLogin={setUser} />;
  }

  return user.tipo === "admin" ? (
    <DashboardAdmin />
  ) : (
    <DashboardUser user={user} />
  );
}

export default App;
