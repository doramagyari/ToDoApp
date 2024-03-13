<template>
  <div class="container max-w-96 mx-auto">
    <TodoHeader @add-todo="handleAddTodo" />
    <!-- <BaseButton @click="handleRemoveAllTodo">Clear All</BaseButton> -->
    <ul v-if="todos.length > 0">
      <li v-for="index in todos" :key="index">
        <!-- <BaseButton @click="handleRemoveTodo(index)" >Remove</BaseButton> -->
        <BaseCard />
      </li>
    </ul>
    <TodoWelcome v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import TodoHeader from "../pages/TodoHeader.vue";
import BaseCard from "../ui/BaseCard.vue";
import TodoWelcome from "../pages/TodoWelcome.vue";

const todos = ref<string[]>([]);

function handleAddTodo(newTodo: string): void {
  todos.value.push(newTodo);
}

function handleRemoveTodo(index: number): void {
  todos.value.splice(index, 1);
}

function handleRemoveAllTodo(): void {
  todos.value.splice(0, todos.value.length);
}
</script>
