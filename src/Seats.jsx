import React, { useReducer } from "react";

const seatState = {
  full: false,
  available: 23,
};

const reducer = (state, action) => {
  if (state.available <= 0) {
    return { ...state, full: true };
  } else {
    return { ...state, available: state.available - action.people };
  }
};

const Seats = () => {
  const [state, dispatch] = useReducer(reducer, seatState);

  return (
    <div>
      <h1>
        {state.full
          ? `No seats available :<`
          : `Available seats: ${state.available}`}
      </h1>
      <button onClick={() => dispatch({ people: 1 })}>Get your seat</button>
    </div>
  );
};

export default Seats;
