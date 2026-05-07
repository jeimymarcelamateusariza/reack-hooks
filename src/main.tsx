import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import HooksApp from "./HooksApp";
// import { TrafficLight } from "./useState/TrafficLight";
// import { TrafficLightWithEffect } from "./useEffect/TrafficLightWhitEffect";
// import { TrafficLightWithHook } from "./useEffect/TrafficLightWhitHook";
// import { PhotoAlbum } from "./photoAlbum/PhotoAlbum";
// import { PokemonPage } from "./examples/PokemonPage";
//import { TasksApp } from "./useReducer/TaskApp";
//import { FocusScreen } from "./useRef/FocusScreen";
import { ScrambleWords } from "./useReducer/ScrambleWords";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PhotoAlbum /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>,
);
