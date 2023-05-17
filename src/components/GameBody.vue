<template>
  <div class="gameBody">
    <StartGame v-if="stateStore.currentState === Labels.startState"></StartGame>
    <GuessColor v-if="stateStore.currentState === Labels.guessColorState"></GuessColor>
  </div>
</template>

<style scoped>
.gameBody {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: solid 1px red; */
}
</style>

<script setup>
import StartGame from "./StartGame.vue";
import Labels from "@/Labels.js";
import { gameStatesStore } from "../stores/gameStates";
import { storeToRefs } from "pinia";
import GuessColor from "./GuessColor.vue";

const stateStore = gameStatesStore();
let { gameStarted } = storeToRefs(stateStore);
</script>
