<template>
  <header>
    <div></div>
    <div class="titleContainer">
      <h2>{{ Labels.title }}</h2>
      <img
        draggable="false"
        src="../assets/cardslogo.png"
        alt="image of 4 playing cards"
      />
    </div>

    <div class="countersContainer">
      <div class="scoreCounter">Score: {{ score }}/3</div>
      <div class="gamesCounter">Games won: {{ gamesWon }}</div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* border: solid 1px black; */
  /* width: 100%; */
  text-align: center;
  /* height: 40px; */
  /* padding: 16px; */
}

img {
  width: 6em;
  height: 6em;
}
header > * {
  flex-basis: 100%;
  /* border: solid 1px red; */
}
.titleContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.countersContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  gap: 20px;
}

.countersContainer > div {
  font-weight: 800;
}
</style>

<script setup>
import Labels from "@/Labels.js";
import { gameStatesStore } from "../stores/gameStates";
import { cardStore } from "../stores/card";
import { storeToRefs } from "pinia";

const stateStore = gameStatesStore();

let { score, gamesWon } = storeToRefs(stateStore);
</script>
