import React from "react";
import DashBoard from "./Dashboard";
import Creator from "./Creator";
import PlayerDisplay from "./PlayerDisplay";

function EspnParent() {
  return (
    <div className="parent">
      <DashBoard />
      <Creator />
      <PlayerDisplay />
    </div>
  );
}

export default EspnParent;
