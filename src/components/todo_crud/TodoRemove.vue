<template>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
      <Button label="Remove" @click="removeTodo(index)"></Button>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../ui/Button.vue'
  
const todos = ref<string[]>([]);
const emit = defineEmits(['remove-todo']);
const { index } = defineProps(['index']);
  
function removeTodo(index: number): void {
emit('remove-todo', index);
}

</script>