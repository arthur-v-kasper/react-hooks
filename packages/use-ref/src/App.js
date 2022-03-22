import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("inicio");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevName.current = name;
    console.log(prevName);
  }, [name]);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "Update value without update state and rerender";
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        ref={inputRef}
        size="80"
      />
      <p>
        My names is {name} and used to be {prevName.current}
      </p>
      <p>Times I'm render: {renderCount.current}</p>
      <p>
        <button onClick={focusInput}>Focus</button>
      </p>
    </>
  );
}

export default App;

/**
 * https://frontend-digest.com/6-practical-applications-for-useref-2f5414f4ac68
 * We can use useRef to persist values for our components lifetime, and update those values, without causing a rerender.
 * Use cases useRef:
 * 1. You need to directly access the DOM element

 */
