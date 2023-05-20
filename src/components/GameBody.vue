<template>
  <div class="gameBody">
    <GameStart v-if="stateStore.currentState === Labels.startState"></GameStart>
    <GuessColor v-if="stateStore.currentState === Labels.guessColorState"></GuessColor>
  </div>
</template>

<style scoped>
.gameBody {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
</style>

<script setup>
import GameStart from "./GameStart.vue";
import Labels from "@/Labels.js";
import { gameStatesStore } from "../stores/gameStates";
import { storeToRefs } from "pinia";
import GuessColor from "./GuessColor.vue";

const stateStore = gameStatesStore();
let { gameStarted } = storeToRefs(stateStore);
</script>
