<template>
    <div class="container max-w-96 mx-auto">
        <TodoHeader @add-todo="handleAddTodo"/>
        <!-- <BaseButton @click="handleRemoveAllTodo">Clear All</BaseButton> -->
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <BaseButton @click="handleRemoveTodo(index)" >Remove</BaseButton>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import BaseButton from './ui/BaseButton.vue';
import TodoHeader from './pages/TodoHeader.vue';

const todos = ref<string[]>([]);

function handleAddTodo(newTodo : string) : void {
    todos.value.push(newTodo)
}

function handleRemoveTodo(index : number) : void {
    todos.value.splice(index, 1)
}

function handleRemoveAllTodo() : void {
    todos.value.splice(0, todos.value.length)
}

</script>./pages/TodoHeader.vue