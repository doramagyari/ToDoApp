<template>
  <div class="container max-w-96 mx-auto">
    <TodoHeader @add-todo="handleAddTodo" />
    <ul v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="index">
        <BaseCard
          :index="index"
          :todo="todo"
          @remove-todo="handleRemoveTodo(index)"
          @update-todo="handleUpdateTodo"
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
  priority: string;
  complete: boolean;
}

const Todo = {
  title: "",
  description: "",
  priority: "",
  complete: false,
};

const todos = ref<Todo[]>([]);

function handleAddTodo(newTodo: Todo): void {
  todos.value.unshift(newTodo);
  console.log(todos);
}

function handleRemoveTodo(index: number): void {
  todos.value.splice(index, 1);
}

function handleUpdateTodo(index: number, updatedTodo: Todo): void {
  todos.value[index] = updatedTodo;
}
</script>
