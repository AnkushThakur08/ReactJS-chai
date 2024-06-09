import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decremnt, increment } from "./counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decremnt())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
