// src/App.tsx
import React from "react";
import Home from "./src/screens/home-page";

const App: React.FC = () => {
  return (
    <div>
      <Home
        name="Carla Cabales"
        age={20}
        bio="I am a React developer learning TypeScript."
      />
    </div>
  );
};

export default App;