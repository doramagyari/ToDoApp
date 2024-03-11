<template>
    <form @submit.prevent="addTodo">
        <label for="newTodo">New Todo</label>
        <input type="text" id="newTodo" v-model="newTodo"/>
        <BaseButton type="submit" >Add</BaseButton>
    </form>
</template>

<script setup lang="ts">

import {ref } from 'vue';
import BaseButton from '../ui/BaseButton.vue';

const emit = defineEmits(['add-todo']);
const newTodo = ref<string>("");

function addTodo() {
    emit('add-todo', newTodo.value);
    newTodo.value = "";
}

</script>