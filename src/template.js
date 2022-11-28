/* eslint-disable no-plusplus */
async function adjustNewRow(
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
function playerPlacesAMarker(playersView, coordinatesOfMarker) {
  const xCoordinate = coordinatesOfMarker[0];
  const yCoordinate = coordinatesOfMarker[1];
  const lengthOfBoard = 2;
  const rowInWhichMarkerIsPlaced = lengthOfBoard - yCoordinate;

  const newPlayersView = [];

  for (let rowIndex = 0; rowIndex < playersView.length; rowIndex++) {
    const row = playersView[rowIndex];
    const newRow = [];
    for (let columnindex = 0; columnindex < row.length; columnindex++) {
      const cell = row[columnindex];

      adjustNewRow(
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

module.exports = { playerPlacesAMarker, adjustNewRow };
