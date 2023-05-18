<template>
  <div class="content">
    <Header></Header>
    <GameBody></GameBody>
    <Footer></Footer>
    <!-- <button @click="getNewDeck" type="button" class="mx-3 shadow-lg btn btn-danger">
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
    </div> -->
  </div>
</template>

<style scoped>
.imageCard {
  height: 400px;
  width: 250px;
  cursor: pointer;
  user-select: none;
  /* border: solid 1px black; */
}

.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  user-select: none;
}
</style>

<script setup>
import { ref, watch } from "vue";
import Header from "./components/Header.vue";
import GameBody from "./components/GameBody.vue";
import Footer from "./components/Footer.vue";
</script>
