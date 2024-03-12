<template>
        <nav class="flex group mt-16 sticky justify-between my-16 sm:px-4">
            <h2 class="font-display font-semibold text-black text-2xl leading-10">To do list</h2>
            <BaseButton type="submit" @click="addTodo">
                <PlusCircleIcon class="h-10 w-10 text-emerald-500 "/>
            </BaseButton>
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