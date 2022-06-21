import React, { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 10000;

  function generateListWithValueChanged(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={generateListWithValueChanged}
      />
      {isPending
        ? "Loading..."
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}

export default App;
