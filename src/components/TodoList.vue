<template>
    <div>
        <TodoForm @add-todo="handleAddTodo"/>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import TodoForm from './TodoForm.vue';

const todos = ref<string[]>([]);
function handleAddTodo(newTodo : string) : void {
    todos.value.push(newTodo)
}

</script>