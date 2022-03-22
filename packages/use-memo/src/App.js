import React, { useState, useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //caso 1
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //caso 2
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme Change");
  }, [themeStyle]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>Double Value: {doubleNumber}</div>
    </>
  );
}

const slowFunction = (number) => {
  console.log("Calling slow function...");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

export default App;


/**
 * Diferenças entre useCallback e useMemo
 * useCallback: Retorna a função em sí na variavel
 * useMemo: Retorna o valor da função.
 */

/**
 * Dois principais casos de uso useMemo
 *
 * 1) Quando uma função lenta é chamada em rerenderização, usa-se ele para armazenar o valor e
 * executala somente quando o valor de dependencia for alterado.
 *
 * 2) Evitar execução de um useEffect desnecessárias memoizando a referencia dos mesmo, pois cada renderização
 * a referencia do objeto é alterada, fazendo o useEffect executar as dependencias
 */
