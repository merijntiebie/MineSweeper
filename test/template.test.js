/* eslint-disable no-shadow */
const {
  playerMarksABomb,
  playerClearsASquare,
  doesPlayerDie,
  doesPlayerWin,
} = require("../src/template");

describe("This test suite tests the game of mine sweeper. The goal of the game is to clear the board. Once the board is cleared and you haven't stepped on a mine, you win the game", () => {
  const playersView = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  const actualBoard = [
    ["2", "2", "1"],
    ["x", "x", "2"],
    ["3", "x", "2"],
  ];
  describe("Every round, a player can mark a spot as a bomb or clear a spot", () => {
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
  describe("If a player chooses to clear a spot, we then see if the cleared spot is a bomb. If it is, the player is dead", () => {
    it("Clear spot at [1, 1] -> dead", () => {
      const coordinatesOfSquareToClear = [1, 1];
      expect(doesPlayerDie(actualBoard, coordinatesOfSquareToClear)).toEqual(
        true
      );
    });

    it("Clear spot at [2, 2] -> not dead", () => {
      const coordinatesOfSquareToClear = [2, 2];
      expect(doesPlayerDie(actualBoard, coordinatesOfSquareToClear)).toEqual(
        false
      );
    });
  });
  describe("If a player chooses to clear a square, and this action causes all squares to be cleared, the player wins", () => {
    it("Player has cleared all squares -> wins", () => {
      const playersView = [
        ["2", "2", "1"],
        ["_", "_", "2"],
        ["3", "_", "2"],
      ];
      expect(doesPlayerWin(actualBoard, playersView)).toEqual(true);
    });

    it("Player has cleared all squares but the top right corner -> doesnt win", () => {
      const playersView = [
        ["2", "2", "_"],
        ["_", "_", "2"],
        ["3", "_", "2"],
      ];
      expect(doesPlayerWin(actualBoard, playersView)).toEqual(false);
    });
  });
});
