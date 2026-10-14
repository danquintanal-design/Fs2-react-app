import { useState } from "react";
import loginClient from "../clients/login/login.client";
import type { LoginUserRequest } from "../clients/login/login.types";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onLogin = (user: LoginUserRequest) => {
    setLoading(true);
    setErrorMsg("");

    loginClient(user)
      .then((data) => {
        if (data && data.user) {
          setEmail(data.user.email);
        } else {
          setErrorMsg("Credenciales incorrectas o respuesta inesperada");
        }
      })
      .catch((err) => {
        console.error("Error en login:", err);
        setErrorMsg("No se pudo conectar con el servidor o credenciales inválidas.");
      })
      .finally(() => {
        // Esto garantiza que el botón vuelva a habilitarse aunque falle la petición
        setLoading(false);
      });
  };

  return {
    loading,
    email,
    errorMsg,
    onLogin,
  };
};

export default useLogin;