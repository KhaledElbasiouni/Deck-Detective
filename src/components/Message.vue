<template>
  <div class="user-message">
    <h3>{{ correctIncorrectMessage }}</h3>
    <div class="msg-buttons">
      <button
        @click="restartGame"
        type="button"
        class="restart mx-3 shadow-lg btn btn-danger"
      >
        {{ Labels.restart }}
      </button>
      <button
        v-if="stateStore.currentState !== Labels.guessSuitState"
        @click="nextLevel"
        type="button"
        class="continue mx-3 shadow-lg btn btn-primary"
      >
        {{ Labels.continue }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.user-message {
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

button {
  border: none;
  padding: 20px;
  width: 100px;
  font-size: 1em;
}
button.restart {
  background: #c50720;
}
button.continue {
  background: #010b14;
}
/* button:hover {
  background: #010b14;
} */
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
import { cardStore } from "../stores/card";
import Labels from "../Labels";

const props = defineProps({
  correctIncorrectMessage: String,
  showContinue: {
    type: Boolean,
    default: "true",
  },
});
const stateStore = gameStatesStore();
const cStore = cardStore();
function nextLevel() {
  stateStore.advanceState();
}
function restartGame() {
  stateStore.restartGame();
  cStore.clearDeck();
}
</script>
