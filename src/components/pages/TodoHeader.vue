<template>
  <nav class="flex group mt-16 sticky justify-between my-10 sm:px-4">
    <h2 class="font-display font-semibold text-black text-4xl leading-10">
      To do list
    </h2>
    <BaseButton @click="addTodo">
      <PlusCircleIcon class="h-10 w-10 text-emerald-500" />
    </BaseButton>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types/todo";

const emit = defineEmits(["add-todo"]);

const localTodo = ref<Todo>({
  id: "",
  title: "",
  description: "",
  priority: "",
  complete: false,
  created_at: getCurrentDateTime(),
});

function generateId(): string {
  return uuidv4();
}

function addTodo() {
  const newTodo = { ...localTodo.value };
  newTodo.id = generateId();
  emit("add-todo", newTodo);
}

function getCurrentDateTime(): Date {
  return new Date();
}
</script>
