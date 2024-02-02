import { render } from "@testing-library/react";
import React from "react";
import About from "../components/About.js"
import Home from "../components/Home.js"
import NavBar from "../components/NavBar.js"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}
export default App;
render(<App />);
