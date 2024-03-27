<template>
    <input 
         v-model="title"
         placeholder="Title" 
         class="font-display font-semibold text-2xl leading-10 text-black pl-5 min-w-20 focus:border-none focus:outline-none">
    </input>
</template>

<script setup lang="ts">
const title = defineModel<string>()
</script>
