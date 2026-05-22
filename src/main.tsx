import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Toaster, toast } from "sonner";
// import HooksApp from "./HooksApp";
// import { TrafficLight } from "./useState/TrafficLight";
// import { TrafficLightWithEffect } from "./useEffect/TrafficLightWhitEffect";
// import { TrafficLightWithHook } from "./useEffect/TrafficLightWhitHook";
// import { PhotoAlbum } from "./photoAlbum/PhotoAlbum";
// import { PokemonPage } from "./examples/PokemonPage";
//import { TasksApp } from "./useReducer/TaskApp";
//import { FocusScreen } from "./useRef/FocusScreen";
// import { ScrambleWords } from "./useReducer/ScrambleWords";
// import MemoHook from "./memos/MemoHook";
// import MemoCounter from "./memos/MemoCounter";
import { InstagromApp } from "./useOptimistic/InstagromApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PhotoAlbum /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </StrictMode>,
);
