<template>
    <div>
        <TodoForm @add-todo="handleAddTodo"/>
        <TodoRemoveAll @remove-all-todo="handleRemoveAllTodo"/>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <TodoRemove :index="index" @remove-todo="handleRemoveTodo" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import TodoForm from './todo_crud/TodoForm.vue';
import TodoRemove from './todo_crud/TodoRemove.vue';
import TodoRemoveAll from './todo_crud/TodoRemoveAll.vue';

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

</script>