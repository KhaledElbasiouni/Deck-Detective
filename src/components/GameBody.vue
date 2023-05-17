<template>
  <div class="gameBody">
    <StartGame v-if="stateStore.currentState === Labels.startState"></StartGame>
  </div>
</template>

<style scoped>
.gameBody {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 1000px;
  /* border: solid 1px red; */
}
</style>

<script setup>
import StartGame from "./StartGame.vue";
import Labels from "@/Labels.js";
import { gameStatesStore } from "../stores/gameStates";
import { storeToRefs } from "pinia";

const stateStore = gameStatesStore();
let { gameStarted } = storeToRefs(stateStore);
</script>
