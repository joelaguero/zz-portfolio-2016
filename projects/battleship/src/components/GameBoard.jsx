import React from 'react';

// Return the GameBoard component, which uses a table to display the game grid.
const GameBoard = (props) => {
  return (
    <table>
      <tbody>
        { buildGrid(props) }
      </tbody>
    </table>
  );
};

// Build out the grid and color cells appropriately if they contain a piece of a damaged ship.
// Set onClick events for cells that pass the cell location (x and y values) to the App component.
const buildGrid = (props) => {
  let grid = [];
  // Build the grid of dimensions boardSize X boardSize.
  for (let i = 0; i < props.size; i++) {
    let cols = [];

    // Build columns.
    for (let j = 0; j < props.size; j++) {

      // Check if the current coordinate has a hit ship.
      // If it does, add the appropriate class names based on the owner.
      // This is used to set different colors for the players.
      let owner = props.isHit({ x: i, y: j}, props.ships);
      switch(owner) {
        case 'p1':
          cols.push(<td key={i,j} className="ship p1" onClick={() => (props.handleTileClick(i, j))} />);
          break;
        case 'p2':
          cols.push(<td key={i,j} className="ship p2" onClick={() => (props.handleTileClick(i, j))} />);
          break;
        default: // 'water'
          cols.push(<td key={i,j} className="water" onClick={() => (props.handleTileClick(i, j))} />);
      }
    }
    // Add the row to the grid.
    grid.push(<tr key={i} >{cols}</tr>);
  }

  return grid;
}

export default GameBoard;
