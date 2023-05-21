<template>
  <Card :showCard="cardDrawn" :imgSrc="cStore.getCardImageUrl"></Card>
  <div class="options">
    <div class="blackDiv">
      <div v-if="!cardDrawn" class="svgDiv">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M232 140a56 56 0 0 1-81.901 49.65l11.94 35.82A8 8 0 0 1 154.45 236h-52.9a8 8 0 0 1-7.59-10.53l11.941-35.82A56 56 0 0 1 24 140c0-53.573 97.686-116.708 101.844-119.37a3.998 3.998 0 0 1 4.312 0C134.314 23.293 232 86.428 232 140Z"
          />
        </svg>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M477.443 295.143a104.45 104.45 0 0 1-202.26 36.67c-.08 68.73 4.33 114.46 69.55 149h-177.57c65.22-34.53 69.63-80.25 69.55-149a104.41 104.41 0 1 1-66.34-136.28 104.45 104.45 0 1 1 171.14 0 104.5 104.5 0 0 1 135.93 99.61z"
          />
        </svg>
      </div>
      <button
        :disabled="cardDrawn"
        @click="pickColor(Labels.black)"
        id="pickBlack"
        type="button"
        class="shadow-lg btn"
      >
        {{ Labels.black }}
      </button>
    </div>

    <div class="redDiv">
      <div v-if="!cardDrawn" class="svgDiv">
        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.037 1.201 2.125 6.7a.482.482 0 0 0-.124.3c-.006.11.028.21.096.3l4.91 6.46c.055.074.13.135.215.177a.637.637 0 0 0 .556 0 .595.595 0 0 0 .216-.177l4.91-6.46a.453.453 0 0 0 .095-.3.482.482 0 0 0-.124-.3L7.963 1.201a.604.604 0 0 0-.208-.148.64.64 0 0 0-.718.148Z"
          />
        </svg>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.267 11.489c.21 6.687-10.266 11.384-11.25 15.056-1.075-4.011-11.06-8.078-11.283-15.056-.214-6.701 8.047-8.155 11.283-2.55 3.316-5.743 11.043-4.039 11.25 2.55z"
          />
        </svg>
      </div>
      <button
        :disabled="cardDrawn"
        @click="pickColor(Labels.red)"
        id="pickRed"
        type="button"
        class="shadow-lg btn"
      >
        {{ Labels.red }}
      </button>
    </div>
  </div>
  <Message v-if="cardDrawn" :correctIncorrectMessage="userMessage"></Message>
</template>

<style scoped>
.blackDiv svg {
  fill: #010b14;
}
.redDiv svg {
  fill: #c50720;
}

.blackDiv,
.redDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

svg {
  height: 50px;
  width: 50px;
  display: relative;
  z-index: 1;
}
.options {
  display: flex;
  gap: 80px;
  margin-top: 100px;
}

button {
  width: 120px;
  height: 120px;
  position: relative;
  z-index: 3;
}

#pickBlack {
  background-color: #010b14;
}
#pickRed {
  background-color: #c50720;
}
#pickRed:disabled,
#pickBlack:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}

#pickBlack,
#pickRed {
  color: white;
  font-size: 18px;
}
.svgDiv svg {
  flex-shrink: 0;
}

.svgDiv {
  position: absolute;
  transition: transform 0.6s;
}

.blackDiv:hover .svgDiv,
.redDiv:hover .svgDiv {
  transform: translateY(-130%);
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

function pickColor(colorPicked) {
  if (cStore.cardColor === colorPicked) {
    userMessage = Labels.correctGuess;
    stateStore.increaseScore();
  } else {
    userMessage = Labels.incorrectGuess;
  }
  cardDrawn.value = true;
}
</script>
