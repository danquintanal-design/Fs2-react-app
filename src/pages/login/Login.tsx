import { useState } from "react";
import { Link } from "wouter";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  // 1. Inicializamos los estados y los hooks del profe
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useDocumentTitle("Login PetSitter");

  // 2. Creamos la función para manejar el envío del formulario
  const handleOnLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página recargue al enviar el form
    login.onLogin({
      username,
      password,
    });
  };

  return (
    <main className="login-container">
      <section className="login-card">
        <img src="/imgs/mascotas.jpeg" alt="Paseo de mascotas" />

        <header className="login-header">
          <h1>PetSitter</h1>
          <p>Inicia sesión para continuar</p>
        </header>

        {/* 3. Conectamos el evento onSubmit al formulario */}
        <form id="loginForm" onSubmit={handleOnLogin}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              required
              // 4. Conectamos el input con el estado username
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              // 5. Conectamos el input con el estado password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* 6. Deshabilitamos el botón mientras carga y cambiamos el texto */}
          <button 
            type="submit" 
            className="button is-primary login-button"
            disabled={login.loading}
          >
            {login.loading ? "Cargando..." : "Iniciar sesión"}
          </button>

          {/* 7. Mostramos el mensaje de éxito usando el email del hook */}
          {login.email && (
             <p className="mensaje" style={{ marginTop: '1rem', color: 'green' }}>
               <strong>Hola usuario: {login.email}</strong>
             </p>
          )}
        </form>

        <footer className="login-footer">
          <p>
            ¿No tienes una cuenta? <Link href="/register">Regístrate</Link> ·{" "}
            <Link href="/">Volver al inicio</Link>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Login;