/* eslint-disable no-plusplus */

const lengthOfBoard = 2;
async function adjustNewRowForFlaggingBomb(
  rowIndex,
  rowInWhichMarkerIsPlaced,
  columnindex,
  xCoordinate,
  cell,
  newRow
) {
  if (rowIndex === rowInWhichMarkerIsPlaced && columnindex === xCoordinate) {
    newRow.push("x");
  } else newRow.push(cell);
}
function returnXCoordinates(coordinates) {
  return coordinates[0];
}
function returnYCoordinates(coordinates) {
  return coordinates[1];
}
function rowInWhichActionIsPerformed(yCoordinate) {
  return lengthOfBoard - yCoordinate;
}
function playerMarksABomb(playersView, coordinatesOfBomb) {
  const xCoordinate = returnXCoordinates(coordinatesOfBomb);
  const yCoordinate = returnYCoordinates(coordinatesOfBomb);
  const rowInWhichMarkerIsPlaced = rowInWhichActionIsPerformed(yCoordinate);

  const newPlayersView = [];

  for (let rowIndex = 0; rowIndex < playersView.length; rowIndex++) {
    const row = playersView[rowIndex];
    const newRow = [];
    for (let columnindex = 0; columnindex < row.length; columnindex++) {
      const cell = row[columnindex];

      adjustNewRowForFlaggingBomb(
        rowIndex,
        rowInWhichMarkerIsPlaced,
        columnindex,
        xCoordinate,
        cell,
        newRow
      );
    }
    newPlayersView.push(newRow);
  }
  return newPlayersView;
}

function adjustNewRowForClearingSquare(
  rowIndex,
  rowInWhichSquareIsCleared,
  columnindex,
  xCoordinate,
  cell,
  actualBoard,
  newRow
) {
  if (rowIndex === rowInWhichSquareIsCleared && columnindex === xCoordinate) {
    const rowInActualBoardThatIsCleared = actualBoard[rowIndex];
    const cellInActualBoardThatIsCleared =
      rowInActualBoardThatIsCleared[columnindex];
    newRow.push(cellInActualBoardThatIsCleared);
  } else newRow.push(cell);
}
function playerClearsASquare(
  playersView,
  actualBoard,
  coordinatesOfSquareToClear
) {
  const xCoordinate = returnXCoordinates(coordinatesOfSquareToClear);
  const yCoordinate = returnYCoordinates(coordinatesOfSquareToClear);
  const rowInWhichSquareIsCleared = rowInWhichActionIsPerformed(yCoordinate);
  const newPlayersView = [];

  for (let rowIndex = 0; rowIndex < playersView.length; rowIndex++) {
    const row = playersView[rowIndex];
    const newRow = [];
    for (let columnindex = 0; columnindex < row.length; columnindex++) {
      const cell = row[columnindex];

      adjustNewRowForClearingSquare(
        rowIndex,
        rowInWhichSquareIsCleared,
        columnindex,
        xCoordinate,
        cell,
        actualBoard,
        newRow
      );
    }
    newPlayersView.push(newRow);
  }
  return newPlayersView;
}

module.exports = {
  playerMarksABomb,
  adjustNewRow: adjustNewRowForFlaggingBomb,
  playerClearsASquare,
};
