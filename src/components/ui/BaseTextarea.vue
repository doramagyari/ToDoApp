<template>
  <textarea
    v-model="description"
    placeholder="Cras placerat proin."
    class="font-display-pro text-black font-semibold text-28 leading-34 text-gray-600 pl-5 pt-6 focus:border-none focus:outline-none"
  >
  </textarea>
</template>

<script setup lang="ts">
const description = defineModel<string>();
</script>
