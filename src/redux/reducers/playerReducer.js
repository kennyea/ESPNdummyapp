import * as types from "../actions/actionTypes";

const initialState = {
  username: "Jeffany",
  totalPlayers: 0,
  playerList: [],
};

function playerReducer(state = initialState, action) {
  // const playerReducer = (state = initialState, action) => {
  let playerList;

  switch (action.type) {
    case types.ADD_PLAYER: {
      // add player
      console.log("ADD_PLAYER DISPATCHED");
      playerList = state.playerList.slice();
      const newPlayer = {
        name: action.payload,
      };
      playerList.push(newPlayer);
      return {
        ...state,
        playerList, // playerList: playerList
      };
    }
    case types.ADD_TOTAL_PLAYER: {
      //increment the number of total players
      console.log("TOTAL_PLAYER DISPATCHED");
      let { totalPlayers } = state;
      totalPlayers += 1;
      return {
        ...state,
        totalPlayers,
      };
    }
    case types.DELETE_PLAYER: {
      //delete player from list
      // action payload is now an index of playerList
      console.log("DELETE_PLAYER DISPATCHED");
      playerList = state.playerList.slice();
      playerList.splice(action.payload, 1);
      let { totalPlayers } = state;
      totalPlayers -= 1;
      return {
        ...state,
        playerList,
        totalPlayers,
      };
    }
    default: {
      console.log("im in default");
      return state;
    }
  }
}

export default playerReducer;
