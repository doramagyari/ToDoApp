<template>
  <img
    :src="currentSvg"
    class="sm:hidden lg:block lg:pr-4"
    @click="clickedSvg"
    @click.stop="checkedTodo"
  />
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
