import React from "react";
import Header from "./src/components/Header";
import BodyPage from "./src/components/Body-page";
import Footer from "./src/components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BodyPage />
      <Footer />
    </div>
  );
};

export default App;