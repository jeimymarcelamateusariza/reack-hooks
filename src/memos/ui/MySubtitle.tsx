import { memo } from "react";

interface Props {
  subtitle: string;
  callMyAPI: () => void;
}

export const MySubtitle = memo(({ subtitle, callMyAPI }: Props) => {
  console.log("Mi subtítulo re-render" + subtitle);
  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">{subtitle}</h6>
      <button className="bg-blue-800 rounded-md w-full p-2" onClick={callMyAPI}>
        Llamar función
      </button>
    </div>
  );
});

export default MySubtitle;
