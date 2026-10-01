import { Link } from "wouter";

const Menu = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#222" }}>
      <Link href="/">Inicio</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Registro</Link>
    </nav>
  );
};

export default Menu;