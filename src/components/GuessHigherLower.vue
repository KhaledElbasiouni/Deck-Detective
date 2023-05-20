<template>
  <Card :showCard="cardDrawn" :imgSrc="cStore.getCardImageUrl"></Card>
  <div class="options">
    <svg viewBox="0 -0.5 17 17" xmlns="http://www.w3.org/2000/svg" class="svg-arrow">
      <path
        :class="{ disabled: cardDrawn }"
        @click="higherOrLower(false)"
        d="m8.327 15.886 5.447-5.94a.65.65 0 0 0-.002-.849l-3.841-.005V1.068c0-.553-.437-1-.976-1H7.004a.987.987 0 0 0-.976 1v8.02l-3.95-.005a.652.652 0 0 0 .004.848l5.485 5.954a.501.501 0 0 0 .76.001Z"
      />
    </svg>
    <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="svg-arrow">
      <path
        :class="{ disabled: cardDrawn }"
        @click="higherOrLower(true)"
        d="m8.65 1.158-5.485 5.94a.648.648 0 0 0 .002.849l3.868.005v8.024c0 .553.439 1 .982 1h1.965a.99.99 0 0 0 .982-1v-8.02l3.811.005a.65.65 0 0 0-.004-.848L9.414 1.159a.506.506 0 0 0-.764-.001Z"
      />
    </svg>
  </div>
  <Message v-if="cardDrawn" :correctIncorrectMessage="userMessage"></Message>
</template>

<style scoped>
.svg-arrow {
  fill: #010b14;
  height: 100px;
  width: 100px;
  flex-shrink: 0;
}
path {
  cursor: pointer;
}
.svg-arrow path:not(.disabled):hover {
  fill: #c50720;
}

.options {
  display: flex;
  gap: 60px;
  margin-top: 100px;
}
.disabled {
  cursor: not-allowed;
  pointer-events: all !important;
  opacity: 0.5;
}

.svg-arrow {
  overflow: visible;
}
.svg-arrow path {
  transition: transform 0.2s ease-in-out;
  transform-origin: center;
}

.svg-arrow path:not(.disabled):hover {
  transform: scale(1.2);
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
import { cardStore } from "../stores/card";
import Card from "./Card.vue";
import Message from "./Message.vue";
import { ref, onMounted, onBeforeMount, nextTick } from "vue";
import Labels from "../Labels";

const cardRanks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const stateStore = gameStatesStore();
const cStore = cardStore();
cStore.drawCard();

let userMessage = ref("");
let cardDrawn = ref(false);

function higherOrLower(guessIsHigher) {
  let firstCardHigher =
    cardRanks.indexOf(this.firstCardRank) > cardRanks.indexOf(cStore.cardRank);
  if (!firstCardHigher && guessIsHigher) {
    userMessage = Labels.correctGuess;
  } else if (firstCardHigher && !isHigher) {
    userMessage = Labels.correctGuess;
  } else {
    userMessage = Labels.incorrectGuess;
  }
  cardDrawn.value = true;
}
</script>
