import React from "react";
import { ACTIONS } from "./App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete ? "checked" : null}
        onClick={() =>
          dispatch({ type: ACTIONS.TOUGLED_TODO, payload: { id: todo.id } })
        }
      />
      <span
        style={{
          textDecoration: todo.complete ? "line-through" : null,
          margin: "5px 5px",
        }}
      >
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })
        }
      >
        &#x1F5D1;
      </button>
    </div>
  );
}
