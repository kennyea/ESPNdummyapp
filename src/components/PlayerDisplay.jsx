import React from "react";
import Player from "./Player";
import { useSelector } from "react-redux";

function PlayerDisplay() {
  const players = useSelector((state) => state.espn.playerList);

  const listOfPlayers = players.map((player, index) => {
    const stats = player.name.length;
    return <Player playerName={player.name} id={index} />;
    //playerName is an attribute. so this will be the prop i'm passing down.
  });

  return <div id="playerList">{listOfPlayers}</div>;
}

export default PlayerDisplay;
