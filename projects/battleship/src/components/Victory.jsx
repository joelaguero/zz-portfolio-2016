import React from 'react';

// Victory component displayed when there is a winner, which means one player's ships
// have all been sunk.
const Victory = (props) => (
  <div id="victory">
    <h1>Congratulations { (props.winner === 'p1') ? 'Player 1' : 'Player 2' }! </h1>
    <p>You won Battleship. Refresh the page to play again.</p>
    <img src="https://media.giphy.com/media/26AHBVKVPECIp6xgY/giphy.gif" />
  </div>
);

export default Victory;
