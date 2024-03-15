<template>
  <div class="container max-w-96 mx-auto">
    <TodoHeader @add-todo="handleAddTodo" />
    <ul v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="index">
        <BaseCard
          :title="todo.title"
          :description="todo.description"
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

interface Todo {
  title: string;
  description: string;
}

const todos = ref<Todo[]>([]);

function handleAddTodo(newTodo: Todo): void {
  todos.value.push(newTodo);
}

</script>
