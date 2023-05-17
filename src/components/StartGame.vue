<template>
  <div class="shadow-lg card text-center">
    <h3 class="card-header">Here's how the game works...</h3>
    <div class="card-body">
      <ol class="ruleList">
        <li>
          Every game starts with a fresh deck of 52 cards. Each deck has 4 "Suits" and 13
          "Ranks"
        </li>
        <li>
          You will be asked to guess some information about the next card to be drawn.
        </li>
        <li>
          If you guess correctly you will be moved on to the next stage of the game. If
          not you will be given the option to restart the game with a fresh deck of cards.
        </li>
        <li>
          First, you will be asked to guess whether or not the next card will be a Red or
          Black.
        </li>
        <li>
          Next, you will be asked to guess if the next card will be higher, lower, or
          equal to the first card.
        </li>
        <li>
          Lastly, you will be asked to guess if the next card will be Hearts, Diamonds,
          Clubs, or Spades.
        </li>
      </ol>
      <button @click="startGame" type="button" class="mx-3 shadow-lg btn btn-danger">
        Start Playing!
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 50%;
}

.card-header,
.card {
  border: none;
  background-color: #fff;
}

.ruleList {
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
const stateStore = gameStatesStore();

function startGame() {
  stateStore.advanceState();
}
</script>
