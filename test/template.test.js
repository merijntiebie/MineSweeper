const { playerMarksABomb, playerClearsASquare } = require("../src/template");

describe("This test suite tests the game of mine sweeper. The goal of the game is to clear the board. Once the board is cleared and you haven't stepped on a mine, you win the game", () => {
  describe("Every round, a player can mark a spot as a bomb or clear a spot", () => {
    const playersView = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

    it("Player marks the middle spot as a bomb", () => {
      const coordinatesOfBomb = [1, 1];
      expect(playerMarksABomb(playersView, coordinatesOfBomb)).toEqual([
        ["_", "_", "_"],
        ["_", "x", "_"],
        ["_", "_", "_"],
      ]);
    });

    it("Player marks the middle left as a bomb", () => {
      const coordinatesOfBomb = [0, 1];
      expect(playerMarksABomb(playersView, coordinatesOfBomb)).toEqual([
        ["_", "_", "_"],
        ["x", "_", "_"],
        ["_", "_", "_"],
      ]);
    });

    it("Player clears the left bottom corner", () => {
      const coordinatesOfSquareToClear = [0, 0];
      const actualBoard = [
        ["2", "2", "1"],
        ["x", "x", "2"],
        ["3", "x", "2"],
      ];
      expect(
        playerClearsASquare(
          playersView,
          actualBoard,
          coordinatesOfSquareToClear
        )
      ).toEqual([
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["3", "_", "_"],
      ]);
    });

    it("Player clears the top right corner", () => {
      const coordinatesOfSquareToClear = [2, 2];
      const actualBoard = [
        ["2", "2", "1"],
        ["x", "x", "2"],
        ["3", "x", "2"],
      ];
      expect(
        playerClearsASquare(
          playersView,
          actualBoard,
          coordinatesOfSquareToClear
        )
      ).toEqual([
        ["_", "_", "1"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ]);
    });
  });
});
