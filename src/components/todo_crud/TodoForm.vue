<template>
    <form @submit.prevent="addTodo">
        <label for="newTodo">New Todo</label>
        <input type="text" id="newTodo" v-model="newTodo"/>
        <button type="submit">Add Todo</button>
    </form>
</template>

<script setup lang="ts">

import {ref } from 'vue';

const newTodo = ref<string>("");
const emit = defineEmits(['add-todo']);

function addTodo() {
    emit('add-todo', newTodo.value);
    newTodo.value = "";
}

</script>