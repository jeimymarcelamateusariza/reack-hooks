import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);
  const navigation = useNavigate();
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página de perfil</h1>
      <hr className="my-4" />
      <pre className="p-4 rounded-md overflow-auto max-w-lg mx-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
      <Button
        variant="destructive"
        className="max-w-sm mt-4 mx-auto"
        onClick={() => {
          logout();
          navigation("/");
        }}
      >
        Salir
      </Button>
    </div>
  );
};

export default ProfilePage;
