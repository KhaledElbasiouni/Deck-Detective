<template>
  <div class="card">
    <img
      draggable="false"
      :src="imgSrc"
      class="card-img"
      onerror="this.style.display='none'"
    />
    <img
      v-if="!showCard"
      draggable="false"
      src="@/assets/card-placeholder.png"
      class="card-img card-placeholder"
      onerror="this.style.display='none'"
    />
  </div>
</template>

<style scoped>
.card-img {
  cursor: pointer;
  z-index: 1;
}
.card {
  border: none;
  user-select: none;
  width: 220px;
  height: 300px;
}

.card-placeholder {
  z-index: 2;
  position: absolute;
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
import { ref } from "vue";
const stateStore = gameStatesStore();

const props = defineProps({ imgSrc: String, showCard: Boolean });
</script>
