<template>
  <div @click.stop="clickedSvg">
    <img :src="currentSvg" @click="checkedTodo" class="pr-3 mt-5" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ellipseSvg from "../../assets/svg/ellipse.svg";
import ellipseCheckedSvg from "../../assets/svg/ellipse-checked.svg";

const emit = defineEmits(["update:modelValue", "checked-todo"]);
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

function checkedTodo() {
  emit("checked-todo");
}
</script>
