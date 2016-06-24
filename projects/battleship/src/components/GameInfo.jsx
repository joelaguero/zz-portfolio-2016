import React from 'react';

// Create the component that displays the game title and current player.
const GameInfo = (props) => (
  <div id='game-info'>
    <h1>Welcome to Battleship</h1>
    <div>
      <strong>Who's turn?</strong>
      <p id="player-turn">{ props.playerTurn }</p>
    </div>
  </div>
);

export default GameInfo;
