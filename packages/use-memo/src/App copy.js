import React from "react";

function App({ xpFormVariant }) {
  return (
    <>
      {xpFormVariant ? (
        <XPForm {...props} />
      ) : (
        <Form {...props} />
      )}
    </>
  );
}

export default App;