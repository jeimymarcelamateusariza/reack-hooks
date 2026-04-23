import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pusle",
  yellow: "bg-yellow-500 animate-pusle",
  green: "bg-green-500 animate-pusle",
  //blue: "bg-blue-500 animate-pusle",
};

// type TrafficLightColor = "red" | "yellow" | "green";
type TrafficLightColor = keyof typeof colors; //Esta opción es más escalable, por si algun día se agrega otras opciones de color, no es necesario modificar el type ya que se basa en las claves del objeto colors.

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    if (countdown === 0) return;
    console.log({ countdown });
    const intervalId = setInterval(() => {
      console.log("Intervalo ejecutado");
      setCountdown((prev) => prev - 1);
    }, 1000);
    //Función de limpieza para evitar bucle
    return () => {
      console.log("Limpiando el intervalo");
      clearInterval(intervalId);
    };
  }, [countdown]);
  //Efecto para el cambio de color
  useEffect(() => {
    if (countdown === 0) {
      setCountdown(5);
      if (light === "yellow") {
        setLight("red");
        return;
      }
      if (light === "red") {
        setLight("green");
        return;
      }
      if (light === "green") {
        setLight("yellow");
        return;
      }
    }
  }, [countdown, light]);

  return {
    //Props
    countdown,
    colors,
    light,

    //Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",

    //Methods
  };
};
