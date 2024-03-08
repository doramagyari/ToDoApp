<template>
    <Button label="Clear All" @click="removeAllTodo"/>
</template>

<script setup lang="ts">
import Button from '../ui/Button.vue'
  
const emit = defineEmits(['remove-all-todo' ]);

function removeAllTodo(){
    emit('remove-all-todo');
}

</script>