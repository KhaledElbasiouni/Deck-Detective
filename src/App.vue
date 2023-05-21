<template>
  <div class="content">
    <Header></Header>
    <GameBody></GameBody>
    <Footer></Footer>
  </div>
  <canvas v-show="showConfetti" ref="confettiCanvas" id="my-canvas"></canvas>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  user-select: none;
  background-color: #efeee6;
}
#my-canvas {
  position: absolute;
  top: 0;
  pointer-events: none;
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import Header from "./components/Header.vue";
import GameBody from "./components/GameBody.vue";
import Footer from "./components/Footer.vue";
import { gameStatesStore } from "./stores/gameStates";
import ConfettiGenerator from "../node_modules/confetti-js/src/confetti";
import { storeToRefs } from "pinia";

const stateStore = gameStatesStore();
const confettiCanvas = ref(null);

let { gameStarted, score } = storeToRefs(stateStore);
let showConfetti = ref(false);
let confetti = null;
onMounted(() => {});
watch(score, () => {
  if (score.value === 3) {
    showConfetti.value = true;
    const confettiElement = confettiCanvas.value;
    let confettiSettings = { target: confettiElement };
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
  if (!gameStarted.value) {
    confetti.clear();
  }
});

onBeforeUnmount(() => {
  confetti.clear();
});
</script>
