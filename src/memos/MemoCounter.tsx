import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heayStuff = (iterationNumber: number) => {
  console.time("heayStuff");

  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }

  console.timeEnd("heayStuff");

  return `${iterationNumber} iteraciones realizadas`;
};
const MemoCounter = () => {
  const { counter, increment } = useCounter(4000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  const myHeavyValue = useMemo(() => heayStuff(counter), [counter]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">MemoCounter - {myHeavyValue}</h1>
      <hr />
      <h4>Counter: {counter}</h4>
      <h4>Counter: {counter2}</h4>
      <div className="flex gap-4">
        <button className="bg-blue-500 p-2 rounded-md w-12" onClick={increment}>
          {" "}
          +1{" "}
        </button>
        <button
          className="bg-blue-500 p-2 rounded-md w-40"
          onClick={increment2}
        >
          {" "}
          +1 Counter{" "}
        </button>
      </div>
    </div>
  );
};

export default MemoCounter;
