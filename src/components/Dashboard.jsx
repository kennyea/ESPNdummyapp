import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  // use redux hook to grab state of username
  // use redux hook to grab value of total players
  // render these on the dashboard as a list
  const userName = useSelector((state) => state.espn.username);
  const totalPlayers = useSelector((state) => state.espn.totalPlayers);

  return (
    <div id="dashboard">
      <ul>
        <li>{userName}</li>
        <li>{totalPlayers}</li>
      </ul>
    </div>
  );
}

export default Dashboard;

// useDispatch is the equivalent of mapDispatchToProps
// useSelector = mapStateToProps

//we can create variables and assign it the value of using useSelector.
//we pass in the state, and then get whatever we want within state.
// const totalCards = useSelector(state => state.markets.totalCards);
