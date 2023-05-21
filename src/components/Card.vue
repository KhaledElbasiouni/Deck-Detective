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
  z-index: 1;
}
.card {
  border: none;
  user-select: none;
  width: 180px;
  height: 260px;
  background-color: #efeee6;
}

.card-placeholder {
  z-index: 2;
  position: absolute;
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
const stateStore = gameStatesStore();

const props = defineProps({ imgSrc: String, showCard: Boolean });
</script>
