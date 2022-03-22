import React, { useEffect, useState } from "react";

const List = ({ getItens }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItens());
    console.log("Updating Items");
  }, [getItens]);

  return items.map((item) => <p key={item}>{item}</p>);
};

export default List;
