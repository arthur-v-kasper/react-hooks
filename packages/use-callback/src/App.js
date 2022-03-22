import React, { useState, useCallback, useMemo } from "react";
import List from "./List";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //caso 2
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const getItens = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItens={getItens} />
    </div>
  );
}

export default App;

/**
 * Diferenças entre useCallback e useMemo
 * useCallback: Retorna a função em sí na variavel
 * useMemo: Retorna o valor da função.
 */
