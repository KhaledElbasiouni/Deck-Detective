import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Labels from "../Labels.js";

const gameStates = [
  Labels.startState,
  Labels.guessColorState,
  Labels.guessHigherOrLowerState,
  Labels.guessRankState,
];

export const gameStatesStore = defineStore("gameStatesStore", {
  state: () => ({
    stateNumber: 0,
    gameStarted: false,
  }),
  getters: {
    currentState(state) {
      return gameStates[state.stateNumber];
    },
    didGameStart(state) {
      return state.gameStarted;
    },
  },
  actions: {
    restartGame() {
      this.gameStarted = false;
      this.stateNumber = 0;
    },

    advanceState() {
      this.gameStarted = true;
      this.stateNumber++;
    },
  },
});