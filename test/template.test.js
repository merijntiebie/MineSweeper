const { playerPlacesAMarker } = require("../src/template");

describe("This test suite tests the game of mine sweeper. The goal of the game is to clear the board. Once the board is cleared and you haven't stepped on a mine, you win the game", () => {
  describe("Every round, a player marks a place on the board", () => {
    const playersView = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

    it("Player places its marker in the middle", () => {
      const coordinatesOfMarker = [1, 1];
      expect(playerPlacesAMarker(playersView, coordinatesOfMarker)).toEqual([
        ["_", "_", "_"],
        ["_", "x", "_"],
        ["_", "_", "_"],
      ]);
    });

    it("Player places its marker in the bottom left corner", () => {
      const coordinatesOfMarker = [0, 0];
      expect(playerPlacesAMarker(playersView, coordinatesOfMarker)).toEqual([
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["x", "_", "_"],
      ]);
    });
  });
});
