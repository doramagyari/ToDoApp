<template>
      <button @click="handleClick">{{ label }}</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { label } = defineProps(['label']);
const emit = defineEmits(['remove-todo', 'remove-all-todo']);

function handleClick(): void {
  emit('remove-todo');
  emit('remove-all-todo');
}

</script>