import React from 'react';
import GameInfo from './GameInfo.jsx';
import GameBoard from './GameBoard.jsx';
import Victory from './Victory.jsx';
import _ from 'lodash';

// This is the main component of the Battleship game.
// It contains the bulk of the logic and holds the ships in state.
//
// Details:
// * Ships are organized by player. A ship is an Object that contains three properties,
//   including: coords (Array), isSunk (Boolean), and owner (String).
// * Coords is an array of coordinate objects, which contain properties x (Int), y (Int),
//   and isHit (Boolean).
// * In addition, the App component tracks the current player in state.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 'p1',
      ships: {
        'p1': [],
        'p2': [],
      },
    };
    this.rules = {
      boardSize: 4, // Set to a small value for testing purposes.
      numShips: 2,
      // NOTE: This application does not yet handle edge cases, such as that where
      // the number of ships cannot fit on a board of the provided size. Doing this
      // will result in an infinite loop in the method createShipOfLength.
    }
    // Bind methods passed to other components.
    this.handleTileClick = this.handleTileClick.bind(this);
    this.isHit = this.isHit.bind(this);
  }

  // Once the component has rendered, start a new game.
  componentDidMount() {
    this.startNewGame();
  }

  // Initialize the state for a new game and randomly place ships.
  // Player 1 always goes first.
  startNewGame() {
    this.setState({
      playerTurn: 'p1',
      ships: {
        'p1': [],
        'p2': [],
      },
    });
    this.randomlyPlaceShips();
  }

  // This method randomly places ships according to the number of ships set in this.rules.
  // Ship length is based on the number of ships. For example, 5 ships results in ship lengths
  // of 5, 4, 3, 2, and 1 for each player.
  randomlyPlaceShips() {
    var ships = {
      'p1': [],
      'p2': [],
    };
    for (let i = 1; i <= this.rules.numShips; i++) {
      ships['p1'].push(this.createShipOfLength(i, 'p1', ships));
      ships['p2'].push(this.createShipOfLength(i, 'p2', ships));
    }
    this.setState({
      'ships': ships,
    });
  }

  // Returns a ship of length "length" that belongs to "owner"
  // Ships is an object that includes all existing ships
  createShipOfLength(length, owner, ships) {
    let shipPlaced = false;
    while (!shipPlaced) {
      // Choose a random starting point and direction.
      let coords = _randomCoordinatePair(this.rules.boardSize);
      let direction = _randomCardinalDirection();
      let shipCoords = [];

      // Check each potential tile to ensure it is neither occupied already
      // nor out of bounds.
      for (let i = 0; i < length; i++) {
        coords = (i === 0) ? coords : this.calculateCoords(coords, direction);
        if (this.isOutOfBounds(coords) || this.isOccupied(coords, ships)) { break; } else {
          shipCoords.push(coords);
        }
      }

      // Once the appropriate number of empty and valid coordinates are found,
      // update state accordingly with the ship.
      if (shipCoords.length === length) {
        return {
          isSunk: false,
          'coords': shipCoords,
          'owner': owner,
        };
        shipPlaced = true;
      }
    }

  }

  // Based on the direction, increment or decrement the appropriate coordinate value (x or y) by 1.
  calculateCoords(coords, direction) {
    let newCoords = _.clone(coords);
    switch(direction) {
      case 'NORTH':
      newCoords.y++; break;
      case 'EAST':
      newCoords.x++; break;
      case 'SOUTH':
      newCoords.y--; break;
      case 'WEST':
      newCoords.x--; break;
      default:
      return newCoords;
    }
    return newCoords;
  }

  // Checks if the provided coordinates contain a hit ship. If true, then the owner of the ship is returned.
  // Otherwise, this method returns undefined.
  isHit(coords, ships) {
    for (var owner in ships) {
      if (this.checkShipCoords(ships[owner], (coord) => (coord.isHit && coord.x === coords.x && coord.y === coords.y))) {
        return owner;
      }
    }
    // If no hit ship is found, return 'water'.
    return 'water';
  }

  // Accepts a set of ships and a callback function. Returns true if at least one of the ship's coordinate pairs
  // returns true when passed into the callback function. Otherwise, returns false.
  checkShipCoords(ships, callback) {
    return _.some(ships, (ship) => {
      return _.some(ship.coords, (coord) => {
        return callback(coord);
      });
    });
    return false;
  }

  // Compares the coordinate's x and y values to the size of the board, indexed from 0.
  isOutOfBounds(coords) {
    return (coords.x < 0 || coords.x >= this.rules.boardSize || coords.y < 0 || coords.y >= this.rules.boardSize);
  }

  // Checks if a ship in the set of ships provided is already occupying the provided coordinates.
  isOccupied(coords, ships) {
    for (var owner in ships) {
      for (var i = 0; i < ships[owner].length; i++) {
          let ship = ships[owner][i];
          for (let j = 0; j < ship.coords.length; j++) {
            if ((ship.coords[j].x === coords.x) && (ship.coords[j].y === coords.y)) { return true; }
          }
      }
    }
    return false;
  }

  // Handler method called by the GameBoard component when a tile is clicked.
  handleTileClick(x, y) {
    // If there is a ship present and it belongs to the opposing player, hit it.
    this.hitEnemyShip(x, y);
    this.checkForWinner();
    this.nextTurn();
  }

  // Attempts to hit an enemy ship at the provided x and y values.
  // If an enemy ship is found, then it updates the coordinates to be hit.
  // Additionally, it checks if the ship has sunk and updates the ship accordingly if so.
  // Finally, it updates state with these changes.
  hitEnemyShip(x, y) {
    const enemy = getOtherPlayer(this.state.playerTurn);

    let enemyShips = _.clone(this.state.ships[enemy]); // Clone enemy ships to cleanly update React state.
    let playerShips = _.clone(this.state.ships[this.state.playerTurn]);

    // Find the target ship.
    let targetShip = _.find(enemyShips, (ship) => {
      return _.some(ship.coords, (coords) => {
        return (coords.x === x && coords.y === y);
      });
    });

    // If there's an enemy ship found at the location...
    if (targetShip) {
      // Find the target coordinates.
      let targetCoords = _.find(targetShip.coords, (coords) => {
        return (coords.x === x && coords.y === y);
      });
      // Update target coordinates as hit.
      targetCoords.isHit = true;

      // Check if the ship is sunk.
      let isSunk = _.every(targetShip.coords, (coords) => (
        coords.isHit
      ));
      targetShip.isSunk = isSunk;
      // Update state with the modified enemy ships.
      this.setState({
        ships: {
          [enemy]: enemyShips,
          [this.state.playerTurn]: playerShips,
        },
      });
    }
  }

  // This method checks for a winner and updates state with a winner property if there is one.
  // This triggers a re-render that displays the Victory component.
  checkForWinner() {
    for (var owner in this.state.ships) {
      if (_.every(this.state.ships[owner], (ship) => (
        ship.isSunk
      ))) {
        this.setState({
          winner: getOtherPlayer(owner),
        });
      }
    }
  }

  // Sets the playerTurn to be the opposite of the player who just finished their turn.
  nextTurn() {
    this.setState({
      playerTurn: getOtherPlayer(this.state.playerTurn),
    });
  }

  // Default render method that handles display of components.
  render() {

    // If there is a winner, render a special view.
    if (this.state.winner) {
      return (
        <div id="container">
          <Victory winner={this.state.winner} />
        </div>
      );
    }

    // Otherwise, render the board.
    return (
      <div id="container">
        <GameInfo
          playerTurn={this.state.playerTurn} />
        <GameBoard
          size={this.rules.boardSize}
          ships={this.state.ships}
          handleTileClick={this.handleTileClick}
          isHit={this.isHit} />
      </div>
    );
  }
};

// Helper method to return the opposing player's string.
const getOtherPlayer = (player) => (
  (player === 'p1') ? 'p2' : 'p1'
);

// Helper method that generates sa random coordinate pair based no the board size.
const _randomCoordinatePair = (boardSize) => (
  { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize), isHit: false, }
);

// Helper method that generates a random cardinal direction, used when attempting to randomly place ships
// during game setup.
const _randomCardinalDirection = () => {
  const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  return directions[Math.floor(Math.random() * 4)];
};

export default App;
