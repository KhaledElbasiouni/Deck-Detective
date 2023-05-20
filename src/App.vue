<template>
  <div class="content">
    <Header></Header>
    <GameBody></GameBody>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  user-select: none;
  background-color: #efeee6;
}
</style>

<script setup>
import { ref, watch } from "vue";
import Header from "./components/Header.vue";
import GameBody from "./components/GameBody.vue";
import Footer from "./components/Footer.vue";
</script>
