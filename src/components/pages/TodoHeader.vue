<template>
    <!-- <form @submit.prevent="addTodo">
        <label for="newTodo">New Todo</label>
        <input type="text" id="newTodo" v-model="newTodo"/>
        <BaseButton type="submit" >Add</BaseButton>
    </form> -->

    <nav class="w-72 h-8 top-32 left-4">
        <h2 class="font-display font-semibold text-2xl leading-7">To do list</h2>
        <div>
            <BaseButton type="submit">
                <PlusCircleIcon class="w-8 h-8 top-32 end-72" style="color: lightgreen" />
            </BaseButton>
        </div>
    </nav>
</template>

<script setup lang="ts">

import {ref } from 'vue';
import BaseButton from '../ui/BaseButton.vue';
import { PlusCircleIcon } from "@heroicons/vue/24/solid"

const emit = defineEmits(['add-todo']);
const newTodo = ref<string>("");

function addTodo() {
    emit('add-todo', newTodo.value);
    newTodo.value = "";
}

</script>