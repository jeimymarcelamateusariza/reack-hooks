import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubtitle } from "./ui/MySubtitle";

const MemoHook = () => {
  const [title, setTitle] = useState("Mi título");
  const [subtitle, setSubtitle] = useState("Mi subtítulo");

  const handleMyAPICall = useCallback(() => {
    console.log("Llamando a mi API", subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient ">
      <div className="max-w-2xl flex flex-col gap-4 p-4">
        <h1 className="text-lg font-bold">Memo Hook</h1>
        <MyTitle title={title} />
        <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setTitle("Hola, " + new Date().getTime())}
        >
          Cambiar título
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setSubtitle("Mundo")}
        >
          Cambiar subtítulo
        </button>
      </div>
    </div>
  );
};

export default MemoHook;
