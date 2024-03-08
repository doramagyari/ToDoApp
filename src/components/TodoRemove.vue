<template>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
      <button @click="removeTodo(index)">Remove</button>
    </ul>
</template>
  
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
  
const todos = ref<string[]>([]);
const emit = defineEmits();
const { index } = defineProps(['index']);
  
function removeTodo(index: number): void {
emit('remove-todo', index);
}
</script>
  