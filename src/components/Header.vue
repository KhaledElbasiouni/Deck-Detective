<template>
  <header>
    <h1>{{ Labels.title }}</h1>
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
  width: 8em;
}
</style>

<script setup>
import Labels from "@/Labels.js";
</script>
