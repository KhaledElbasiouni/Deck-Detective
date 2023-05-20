<template>
  <header>
    <h2>{{ Labels.title }}</h2>
    <img draggable="false" src="../assets/cardslogo.png" alt="image of 4 playing cards" />
  </header>
</template>

<style scoped>
header {
  /* border: solid 1px black; */
  /* width: 100%; */
  text-align: center;
  /* height: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 16px; */
}

img {
  width: 6em;
  height: 6em;
}
</style>

<script setup>
import Labels from "@/Labels.js";
</script>
