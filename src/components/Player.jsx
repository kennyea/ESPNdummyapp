import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_PLAYER } from "../redux/actions/actionTypes";

//props is referencing the parents component's props
function Player(props) {
  const dispatch = useDispatch();

  const onClickVal = () => {
    dispatch({ type: DELETE_PLAYER, payload: props.id });
  };

  return (
    <div id="playerCard">
      <h3>{props.playerName}</h3>
      <button onClick={onClickVal}>
        <strong>DELETE</strong>
      </button>
    </div>
  );
}

export default Player;
