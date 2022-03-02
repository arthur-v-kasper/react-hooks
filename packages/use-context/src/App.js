import React from "react";
import FunctionComponent from "./FunctionComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FunctionComponent />
    </ThemeProvider>
  );
}

export default App;
