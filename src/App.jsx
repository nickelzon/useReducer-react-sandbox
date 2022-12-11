import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

//useReducer accepts a reducer of type (state, action) => newState
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const create = React.createElement;

  return create(
    "div",
    null,
    `Count: ${state.count}`,
    create(
      "button",
      {
        onClick: () => {
          dispatch({ type: "increment" });
        },
      },
      "+"
    ),
    create(
      "button",
      {
        onClick: () => {
          dispatch({ type: "decrement" });
        },
      },
      "-"
    )
  );
};

export default App;
