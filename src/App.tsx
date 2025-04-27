import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HistorySlider } from "./features/HistorySlider";

gsap.registerPlugin(useGSAP);

const App: React.FC = () => {
  return (
    <main>
      <HistorySlider />
    </main>
  );
};

export default App;
