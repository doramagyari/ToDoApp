<template>
  <img
    :src="currentSvg"
    class="sm:hidden lg:block lg:pr-4"
    @click="clickedSvg"
  />
</template>

<script setup lang="ts">
import ellipseSvg from "../../assets/svg/ellipse.svg";
import ellipseCheckedSvg from "../../assets/svg/ellipse-checked.svg";
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);
const currentSvg = ref(ellipseSvg);

function clickedSvg() {
  if (currentSvg.value === ellipseSvg) {
    currentSvg.value = ellipseCheckedSvg;
    emit("update:modelValue", true);
  } else {
    currentSvg.value = ellipseSvg;
    emit("update:modelValue", false);
  }
}
</script>
