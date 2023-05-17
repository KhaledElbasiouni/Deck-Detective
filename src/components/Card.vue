<template>
  <div class="card text-bg-dark">
    <img
      draggable="false"
      :src="props.imgSrc"
      class="card-img"
      onerror="this.style.display='none'"
    />
  </div>
</template>

<style scoped>
.card-img {
  user-select: none;
  cursor: pointer;
}
.card {
  border: none;
}
</style>

<script setup>
import { gameStatesStore } from "../stores/gameStates";
import { ref } from "vue";
const stateStore = gameStatesStore();

const props = defineProps({ imgSrc: String });
let loading = ref(true);
</script>
