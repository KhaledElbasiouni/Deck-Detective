<template>
  <div class="gameBody">
    <h2 v-if="gameStarted" class="promptMsg">{{ prompt }}</h2>
    <GameStart v-if="stateStore.currentState === Labels.startState"></GameStart>
    <GuessColor v-if="stateStore.currentState === Labels.guessColorState"></GuessColor>
    <GuessHigherLower
      v-if="stateStore.currentState === Labels.guessHigherOrLowerState"
    ></GuessHigherLower>
    <GuessSuit v-if="stateStore.currentState === Labels.guessSuitState"></GuessSuit>
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

.promptMsg {
  margin-top: 10px;
  margin-bottom: 40px;
  color: red;
}
</style>

<script setup>
import GameStart from "./GameStart.vue";
import GuessColor from "./GuessColor.vue";
import GuessHigherLower from "./GuessHigherLower.vue";
import GuessSuit from "./GuessSuit.vue";
import Labels from "@/Labels.js";
import { gameStatesStore } from "../stores/gameStates";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const prompts = [
  Labels.guessColorPrompt,
  Labels.guessHigherOrLowerPrompt,
  Labels.guessSuitPrompt,
];
const stateStore = gameStatesStore();

let { gameStarted, stateNumber } = storeToRefs(stateStore);
let prompt = ref("");
watch(stateNumber, () => {
  if (stateNumber.value > 0) {
    prompt.value = prompts[stateNumber.value - 1];
  }
});
</script>
