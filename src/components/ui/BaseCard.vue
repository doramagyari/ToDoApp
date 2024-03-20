<template>
  <div
    class="cursor-pointer box-border bg-white border-2 border-black rounded-lg sm:mx-4 sm:mb-8 lg:mb-12"
    @click.stop="showButtons"
    @click="closePopConfirm"
  >
    <div class="flex justify-between mt-3">
      {{ index }}
      <BaseInput v-model="todo.title"></BaseInput>
      <BaseDropdown v-model="todo.priority"></BaseDropdown>
    </div>
    <div class="flex justify-between">
      <BaseTextarea v-model="todo.description"></BaseTextarea>
      <BaseCheck
        v-show="!isClicked"
        @click.stop="hideButtons"
        v-model="todo.complete"
      ></BaseCheck>
    </div>
    <div class="flex mb-4">
      <BaseButton
        @click="hideButtons"
        @click.stop="saveChanges"
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
    <BasePopConfirm
      :index="index"
      v-if="showPopConfirm"
      @remove-todo="deleteCard"
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

const emit = defineEmits(["remove-todo", "update-todo"]);
const isClicked = ref(false);
const showPopConfirm = ref(false);
const props = defineProps<Props>();

const todo = ref<{
  title: string;
  description: string;
  priority: string;
  complete: boolean;
}>({
  title: "",
  description: "",
  priority: "",
  complete: false,
});

interface Props {
  index: number;
}
function hideButtons() {
  isClicked.value = false;
}

function showButtons() {
  isClicked.value = true;
}

function openPopConfirm() {
  showPopConfirm.value = true;
}

function closePopConfirm() {
  showPopConfirm.value = false;
}

function deleteCard() {
  emit("remove-todo", props.index);
}

function saveChanges() {
  emit("update-todo", props.index, todo.value);
}
</script>
