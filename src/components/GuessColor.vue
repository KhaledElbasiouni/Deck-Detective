<template>
  <Card v-if="flag" :imgSrc="cardStoreInst.getCardImageUrl"></Card>
  <div class="options">
    <button @click="drawCard" type="button" class="shadow-lg btn btn-dark">Black</button>
    <button @click="drawCard" type="button" class="shadow-lg btn btn-danger">Red</button>
  </div>
</template>

<style scoped>
.options {
  display: flex;
  gap: 100px;
  margin-top: 100px;
}

button {
  width: 200px;
  height: 200px;
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
import { cardStore } from "../stores/card";
import Card from "./Card.vue";
import { ref } from "vue";

const stateStore = gameStatesStore();
const cardStoreInst = cardStore();
let flag = ref(false);
function getDeck() {
  cardStoreInst.getNewDeck();
}
function drawCard() {
  cardStoreInst.drawCard();
  flag.value = true;
}
</script>
