<template>
  <Card :showCard="cardDrawn" :imgSrc="cStore.getCardImageUrl"></Card>
  <div class="options">
    <div class="blackDiv">
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path
          @click="guessSuit(Labels.spades)"
          :class="{ disabled: cardDrawn }"
          d="M232 140a56 56 0 0 1-81.901 49.65l11.94 35.82A8 8 0 0 1 154.45 236h-52.9a8 8 0 0 1-7.59-10.53l11.941-35.82A56 56 0 0 1 24 140c0-53.573 97.686-116.708 101.844-119.37a3.998 3.998 0 0 1 4.312 0C134.314 23.293 232 86.428 232 140Z"
        />
      </svg>
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          @click="guessSuit(Labels.clubs)"
          :class="{ disabled: cardDrawn }"
          d="M477.443 295.143a104.45 104.45 0 0 1-202.26 36.67c-.08 68.73 4.33 114.46 69.55 149h-177.57c65.22-34.53 69.63-80.25 69.55-149a104.41 104.41 0 1 1-66.34-136.28 104.45 104.45 0 1 1 171.14 0 104.5 104.5 0 0 1 135.93 99.61z"
        />
      </svg>
    </div>
    <div class="redDiv">
      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <path
          @click="guessSuit(Labels.diamonds)"
          :class="{ disabled: cardDrawn }"
          d="M7.037 1.201 2.125 6.7a.482.482 0 0 0-.124.3c-.006.11.028.21.096.3l4.91 6.46c.055.074.13.135.215.177a.637.637 0 0 0 .556 0 .595.595 0 0 0 .216-.177l4.91-6.46a.453.453 0 0 0 .095-.3.482.482 0 0 0-.124-.3L7.963 1.201a.604.604 0 0 0-.208-.148.64.64 0 0 0-.718.148Z"
        />
      </svg>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          @click="guessSuit(Labels.hearts)"
          :class="{ disabled: cardDrawn }"
          d="M27.267 11.489c.21 6.687-10.266 11.384-11.25 15.056-1.075-4.011-11.06-8.078-11.283-15.056-.214-6.701 8.047-8.155 11.283-2.55 3.316-5.743 11.043-4.039 11.25 2.55z"
        />
      </svg>
    </div>
  </div>
  <Message
    v-if="cardDrawn && !displayCongrats"
    :correctIncorrectMessage="userMessage"
  ></Message>
  <div v-if="displayCongrats" class="congrats-card shadow-lg card text-center">
    <h2 class="card-header">{{ userMessage }}</h2>
    <div class="card-body">
      <button @click="restartGame" type="button" class="mx-3 shadow-lg btn btn-danger">
        {{ Labels.restart }}
      </button>
    </div>
  </div>
</template>

<style scoped>
svg {
  height: 100px;
  width: 100px;
  flex-shrink: 0;
}

.blackDiv,
.redDiv {
  display: flex;
  gap: 30px;
}
.blackDiv svg {
  fill: #010b14;
}
.redDiv svg {
  fill: #c50720;
}
path {
  cursor: pointer;
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

.options svg {
  overflow: visible;
}
.options path {
  transition: transform 0.2s ease-in-out;
  transform-origin: center;
}

.options path:not(.disabled):hover {
  transform: scale(1.2);
}

.card-header,
.congrats-card {
  border: none;
  background-color: #fff;
}
.congrats-card {
  width: 50%;
  padding-top: 35px;
  padding-bottom: 35px;
  margin-top: 60px;
  position: absolute;
  z-index: 4;
  border: solid 4px gold;
}
button {
  background: #c50720;
  border: none;
  padding: 15px;
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
import { cardStore } from "../stores/card";
import Card from "./Card.vue";
import Message from "./Message.vue";
import { ref } from "vue";
import Labels from "../Labels";

const stateStore = gameStatesStore();
const cStore = cardStore();
cStore.drawCard();

let userMessage = ref("");
let cardDrawn = ref(false);
let displayCongrats = ref(false);

function determineMessage(score) {
  if (score === 3) {
    return Labels.allCorrectGuesses;
  } else if (score > 0) {
    return Labels.someCorrectGuesses;
  } else {
    return Labels.allInCorrectGuess;
  }
}
function guessSuit(suitGuessed) {
  if (suitGuessed === cStore.cardSuit) {
    stateStore.increaseScore();
  }
  if (stateStore.score === 3) {
    displayCongrats.value = true;
  }
  userMessage = determineMessage(stateStore.score);
  cardDrawn.value = true;
}
function restartGame() {
  stateStore.restartGame();
  cStore.clearDeck();
}
</script>
