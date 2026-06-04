import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { UserContext } from "@/useContext/context/UserContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const [userId, setUserId] = useState("");

  const { login } = useContext(UserContext);

  const navigation = useNavigate();
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit con id: ", userId);

    const result = login(+userId);
    console.log("Resultado del login: ", result);

    if (!result) {
      toast.error("Error al iniciar sesión. Usuario no encontrado.");
      return;
    }
    navigation("/profile");
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página de inicio de sesión</h1>
      <hr className="my-4" />
      <form
        className="flex flex-col justify-center mx-auto gap-2 my-10"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Input
          type="number"
          placeholder="ID del usuario"
          className=" max-w-sm"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <Button
          type="submit"
          className="bg-emerald-400 hover:bg-emerald-500 text-white max-w-sm"
        >
          Iniciar sesión
        </Button>
      </form>
      <Link
        to="/about"
        className="hover:text-blue-400 transition-colors duration-300 underline text-center"
      >
        Volver a la página principal
      </Link>
    </div>
  );
};

export default LoginPage;
