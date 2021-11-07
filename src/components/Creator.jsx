import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_PLAYER, ADD_TOTAL_PLAYER } from "../redux/actions/actionTypes";

function Creator() {
  // need to invoke useDispatch and set to var before starting
  const dispatch = useDispatch();
  // useState hook to create a local state for this component
  //const [state, setState(overrides the first argument evertime it's called)]
  //useState = anything within the parens will be the initial value of the state.
  const [name, setName] = useState("");
  // input field with a watcher for change of input value
  // click event handler will fire the dispatch
  // dispatch({ type: 'LOGIN', payload: {}});
  // testing purposes
  const inputValue = (e) => {
    // ''
    // 'a' value = a
    setName(e.target.value);
    console.log("name: ", name);
  };
  // another function that is onClick
  // where you'd dispatch and you pass in the inputValue

  const onClickVal = () => {
    dispatch({ type: ADD_PLAYER, payload: name });
    dispatch({ type: ADD_TOTAL_PLAYER });
  };

  return (
    <div>
      <input onChange={inputValue} />
      <button onClick={onClickVal}>POOSH ME</button>
    </div>
  );
}

export default Creator;
