<template>
  <div class="container max-w-96 mx-auto">
    <TodoHeader @add-todo="handleAddTodo" />
    <ul v-if="todos.length > 0">
      <li v-for="todo in todos" :key="todo.id">
        <BaseCard
          :is-clicked="isClicked(todo.id)"
          :todo="todo"
          @delete-todo="handleRemoveTodo"
          @update-todo="handleUpdateTodo"
          @edit-card="handleToggleButtons"
          @todo-checked="moveChecked"
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
import { Todo } from "../../types/todo";

const todos = ref<Todo[]>([]);
const currentClickedId = ref<string | null>(null);

function handleAddTodo(newTodo: Todo): void {
  todos.value.unshift(newTodo);
}

function handleRemoveTodo(id: string): void {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function handleUpdateTodo(id: string, updatedTodo: Todo): void {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.value[index] = updatedTodo;
  }
  currentClickedId.value = null;
}

function handleToggleButtons(id: string) {
  currentClickedId.value = id;
}

function isClicked(id: string) {
  return currentClickedId.value === id;
}

function moveChecked(id: string, isChecked: boolean) {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    const checkedTodo = todos.value[index];
    todos.value.splice(index, 1);
    if (isChecked) {
      todos.value.unshift(checkedTodo);
      console.log("checked");
    } else {
      todos.value.push(checkedTodo);
    }
  }
}
</script>
