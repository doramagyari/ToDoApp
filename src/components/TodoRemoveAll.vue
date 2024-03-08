<template>
    <button @click="removeAllTodo">Clear All</button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue';

const emit = defineEmits();

function removeAllTodo(){
    emit('remove-all-todo');
}


</script>