<template>
  <div
    class="cursor-pointer box-border bg-white border-2 border-black rounded-lg sm:mx-4 sm:mb-8 lg:mb-12"
    @click.stop="toggleButtons"
    @click="closePopConfirm"
  >
    <div class="flex justify-between mt-3">
      <BaseInput v-model="title"></BaseInput>
      <BaseDropdown></BaseDropdown>
    </div>
    <div class="flex justify-between">
      <BaseTextarea v-model="description"></BaseTextarea>
      <BaseCheck v-show="!isClicked" @click="toggleButtons"></BaseCheck>
    </div>
    <div class="flex mb-4">
      <BaseButton
        v-show="isClicked"
        class="bg-emerald-500 text-white font-display-pro rounded-xl px-8 max-w-28 ml-5 py-3"
        >Save</BaseButton
      >
      <BaseButton
        v-show="isClicked"
        @click.stop="openPopConfirm"
        class="bg-gray-200 text-black font-display-pro rounded-xl px-8 max-w-28 ml-3 py-3"
        >Delete</BaseButton
      >
    </div>
    <BasePopConfirm v-if="showPopConfirm" @remove-todo="deleteCard"
      >Delete</BasePopConfirm
    >
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import BaseDropdown from "./BaseDropdown.vue";
import BaseInput from "./BaseInput.vue";
import BaseTextarea from "./BaseTextarea.vue";
import BaseCheck from "./BaseCheck.vue";
import BasePopConfirm from "./BasePopConfirm.vue";
import { ref } from "vue";

const emit = defineEmits(["remove-todo"]);
const title = ref<string>("");
const description = ref<string>("");
const isClicked = ref(false);
const showPopConfirm = ref(false);

function toggleButtons() {
  isClicked.value = !isClicked.value;
}

function openPopConfirm() {
  showPopConfirm.value = true;
}

function closePopConfirm() {
  showPopConfirm.value = false;
}

function deleteCard(index: number) {
  emit("remove-todo", index);
}
</script>
