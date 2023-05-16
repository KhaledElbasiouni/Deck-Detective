<template>
  <Header></Header>
  <button @click="getNewDeck" type="button" class="mx-3 shadow-lg btn btn-danger">
    Fetch
  </button>
  <button
    @click="drawCard"
    v-if="canFetch"
    type="button"
    class="shadow-lg btn btn-primary"
  >
    Draw Card
  </button>

  <p>{{ newDeck }}</p>
  <p>{{ deckId }}</p>
  <p>{{ newCard }}</p>

  <div class="imageCard">
    <img draggable="false" :src="cardImageUrl" class="img-fluid" alt="" />
  </div>
</template>

<style scoped>
.imageCard {
  height: 400px;
  width: 250px;
  cursor: pointer;
  user-select: none;
  /* pointer-events: none; */
  /* border: solid 1px black; */
}
</style>

<script setup>
import { ref, watch } from "vue";
import Header from "./components/Header.vue";

let newDeck = ref({});
let newCard = ref();
let deckId = ref("");
let canFetch = ref(false);
let cardImageUrl = ref("");

const GET_DECK_API_URL = "https://www.deckofcardsapi.com/api/deck/new/";
let DRAW_CARD_API_URL = "";
watch(deckId, () => {
  DRAW_CARD_API_URL = `https://www.deckofcardsapi.com/api/deck/${deckId.value}/draw/?count=1`;
});
async function getNewDeck() {
  try {
    const response = await fetch(GET_DECK_API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let responseJSON = await response.json();
    newDeck.value = responseJSON;
    console.log(responseJSON);
    deckId.value = newDeck.value.deck_id;
    canFetch.value = true;
  } catch (error) {
    console.error(error);
  }
}

async function drawCard() {
  try {
    const response = await fetch(DRAW_CARD_API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let responseJSON = await response.json();
    newCard.value = responseJSON;
    cardImageUrl.value = responseJSON.cards[0].images.png;
  } catch (error) {
    console.error(error);
  }
}
</script>
