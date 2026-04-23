import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-thin">Focus Screen</h1>
      <input
        ref={inputRef}
        type="text"
        className="bg-white py-2 px-4 rounded-md text-black w-2xs"
        autoFocus
      />
      <button
        className="bg-emerald-800 rounded-md mx-auto px-20 py-2 cursor-pointer hover:bg-emerald-700"
        onClick={handleClick}
      >
        Set focus
      </button>
    </div>
  );
};
