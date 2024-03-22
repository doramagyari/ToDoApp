<template>
  <div
    class="cursor-pointer box-border bg-white border-2 border-black rounded-lg sm:mx-4 sm:mb-8 lg:mb-12"
    @click="editCard"
    @click.stop="closePopConfirm"
  >
    <div class="flex justify-between mt-3">
      <BaseInput v-model="localTodo.title"></BaseInput>
      <BaseDropdown v-model="localTodo.priority"></BaseDropdown>
    </div>
    <div class="lg:hidden sm:flex sm:pl-5">
      <img :src="calendarSvg" />
      <p class="font-dispay-pro text-zinc-600 pl-1">
        {{ formatDate(localTodo.created_at) }}
      </p>
    </div>
    <div class="flex justify-between">
      <BaseTextarea v-model="localTodo.description"></BaseTextarea>
      <BaseCheck v-show="!isClicked" v-model="localTodo.complete"></BaseCheck>
    </div>
    <div class="flex mb-4" v-show="props.isClicked">
      <BaseButton
        @click.stop="saveChanges"
        class="bg-emerald-500 text-white font-display-pro rounded-xl px-8 max-w-28 ml-5 py-3"
        >Save</BaseButton
      >
      <BaseButton
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
import { Todo } from "../../types/todo";
import calendarSvg from "../../assets/svg/calendar.svg";

const emit = defineEmits([
  "update-todo",
  "remove-todo",
  "delete-todo",
  "edit-card",
  "hide-buttons",
]);
const showPopConfirm = ref(false);
const props = defineProps<Props>();

const localTodo = ref<Todo>({
  id: props.todo.id,
  title: props.todo.title,
  description: props.todo.description,
  priority: props.todo.priority,
  complete: props.todo.complete,
  created_at: getCurrentDateTime(),
});

interface Props {
  todo: Todo;
  isClicked: boolean;
}

function openPopConfirm() {
  showPopConfirm.value = true;
}

function closePopConfirm() {
  showPopConfirm.value = false;
}

function deleteCard() {
  emit("delete-todo", localTodo.value.id);
}

function saveChanges() {
  emit("update-todo", localTodo.value.id, localTodo.value);
}

function editCard() {
  emit("edit-card", localTodo.value.id, props.isClicked);
}

function getCurrentDateTime(): Date {
  return new Date();
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  return date.toLocaleDateString("de-DE", options);
}
</script>
