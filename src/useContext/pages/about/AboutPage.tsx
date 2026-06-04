import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { useContext } from "react";
import { Link } from "react-router";

const AboutPage = () => {
  const { isAuthenticated, logout } = useContext(UserContext);

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr className="my-4" />
      <div className="flex flex-col gap-2">
        {isAuthenticated && (
          <Link
            to="/profile"
            className="hover:text-blue-400 transition-colors duration-300 underline"
          >
            Perfil
          </Link>
        )}

        {isAuthenticated ? (
          <Button variant="destructive" className="mt-4" onClick={logout}>
            Salir
          </Button>
        ) : (
          <Link
            to="/login"
            className="hover:text-blue-400 transition-colors duration-300 underline"
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
