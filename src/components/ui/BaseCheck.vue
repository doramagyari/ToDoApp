<template>
  <img :src="currentSvg" class="hidden lg:block lg:pr-4" @click="clickedSvg" />
</template>

<script setup lang="ts">
import ellipseSvg from "../../assets/svg/ellipse.svg";
import ellipseCheckedSvg from "../../assets/svg/ellipse-checked.svg";
import { ref } from "vue";

const currentSvg = ref(ellipseSvg);

function clickedSvg() {
  if (currentSvg.value === ellipseSvg) {
    currentSvg.value = ellipseCheckedSvg;
  } else {
    currentSvg.value = ellipseSvg;
  }
}
</script>
