import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ADD_TODO: "add_todo",
  TOUGLED_TODO: "toggled_todo",
  REMOVE_TODO: "remove_todo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count++ };
    case ACTIONS.DECREMENT:
      return { count: state.count-- };
    default:
      return state;
  }
}

function reducerTodo(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOUGLED_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

function App() {
  /**
   * useReducer: a prop reducer é um função de dois paramentros onde:
   * 'state' é o valor do estado e 'action' o valor informado na função dispatch
   */
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todos, dispatchTodo] = useReducer(reducerTodo, []);

  const [name, setName] = useState("");

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function handleSubment(e) {
    e.preventDefault();
    dispatchTodo({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <br />
      <form onSubmit={handleSubment}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatchTodo} />;
      })}
    </>
  );
}

export default App;
