import { render } from "@testing-library/react";
import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

export default NavBar;
render(<NavBar />);
