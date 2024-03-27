<template>
  <div
    class="cursor-pointer box-border bg-white border-2 border-black rounded-lg sm:mx-4 sm:mb-8 lg:mb-12 p-1"
    @click="editCard"
  >
    <div class="flex justify-between mt-3">
      <BaseInput
        v-model="localTodo.title"
        :class="{ 'opacity-30': isDropDownClicked }"
      ></BaseInput>
      <BaseDropdown
        v-model="localTodo.priority"
        @content-opacity="toggleDropDown"
      ></BaseDropdown>
    </div>
    <div
      class="lg:hidden sm:flex sm:pl-5"
      :class="{ 'opacity-30': isDropDownClicked }"
    >
      <img :src="calendarSvg" />
      <p class="font-dispay-pro text-zinc-600 pl-1">
        {{ formatDate(localTodo.created_at) }}
      </p>
    </div>
    <div class="flex justify-between">
      <BaseTextarea
        v-model="localTodo.description"
        :class="{ 'opacity-30': isDropDownClicked }"
      ></BaseTextarea>
      <BaseCheck
        v-show="!isClicked"
        v-model="localTodo.complete"
        @click.stop="saveChanges"
        @checked-todo="todoChecked"
      ></BaseCheck>
    </div>
    <div
      class="flex mb-4"
      v-show="isClicked"
      :class="{ 'opacity-30': isDropDownClicked }"
    >
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
    <BasePopConfirm
      v-if="showPopConfirm"
      @remove-todo="deleteCard"
      @click.stop="closePopConfirm"
    ></BasePopConfirm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
import BaseDropdown from "./BaseDropdown.vue";
import BaseInput from "./BaseInput.vue";
import BaseTextarea from "./BaseTextarea.vue";
import BaseCheck from "./BaseCheck.vue";
import BasePopConfirm from "./BasePopConfirm.vue";
import { Todo } from "../../types/todo";
import calendarSvg from "../../assets/svg/calendar.svg";

interface Props {
  todo: Todo;
  isClicked: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits([
  "update-todo",
  "remove-todo",
  "delete-todo",
  "edit-card",
  "todo-checked",
]);
const showPopConfirm = ref(false);
const isDropDownClicked = ref(false);

const localTodo = ref<Todo>({
  id: props.todo.id,
  title: props.todo.title,
  description: props.todo.description,
  priority: props.todo.priority,
  complete: props.todo.complete,
  created_at: getCurrentDateTime(),
});

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

function toggleDropDown(dropDownClicked: boolean) {
  isDropDownClicked.value = dropDownClicked;
}

function todoChecked() {
  emit("todo-checked", localTodo.value.id);
}
</script>
