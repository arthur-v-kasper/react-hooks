import React, { useContext } from "react";
//import { useTheme, useThemeUpdate } from "./ThemeContext";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";
import AnotherFunctionComponent from "./AnotherFunctionComponent";

const FunctionComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const handleClick = useContext(ThemeUpdateContext);

  console.log("darkTheme", darkTheme);

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={handleClick}>Toogle Theme</button>
      <div style={themeStyle}>
        <p>Function Theme</p>
        <AnotherFunctionComponent />
      </div>
    </>
  );
};

export default FunctionComponent;
