<template>
  <div class="container max-w-96 mx-auto">
    <TodoHeader @add-todo="handleAddTodo" />
    <ul v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="index">
        <BaseCard
          :index="index"
          @remove-todo="handleRemoveTodo(index)"
        ></BaseCard>
      </li>
    </ul>
    <TodoWelcome v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoHeader from "../pages/TodoHeader.vue";
import BaseCard from "../ui/BaseCard.vue";
import TodoWelcome from "../pages/TodoWelcome.vue";

const todos = ref<string[]>([]);

function handleAddTodo(newTodo: string): void {
  todos.value.unshift(newTodo);
}

function handleRemoveTodo(index: number): void {
  todos.value.splice(index, 1);
}
</script>
