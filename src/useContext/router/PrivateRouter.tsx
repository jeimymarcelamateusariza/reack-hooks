import { useContext, type JSX } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element; //React.ReactNode tambien es valido
}

export const PrivateRouter = ({ element }: Props) => {
  const { authStatus } = useContext(UserContext);

  if (authStatus === "checking") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-2xl font-bold">Cargando...</span>
      </div>
    );
  }

  if (authStatus === "authenticated") {
    return element;
  }

  return <Navigate to="/login" replace />;
};
