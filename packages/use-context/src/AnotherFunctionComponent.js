import React, { useContext } from "react";
import { useTheme } from "./ThemeContext";

const AnotherFunctionComponent = () => {
  const darkTheme = useTheme();

  const textTheme = () => {
    return darkTheme ? (
      <span>I'm The Dark Theme</span>
    ) : (
      <span>I'm The Light Theme</span>
    );
  };

  return textTheme();
};

export default AnotherFunctionComponent;
