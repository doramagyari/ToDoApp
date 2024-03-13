<template>
  <div
    class="box-border bg-white border-2 border-black rounded-lg sm:mx-4 sm:mb-8 lg:mb-12"
  >
    <div class="flex justify-between mt-3">
      <h2
        class="font-display font-semibold text-2xl leading-10 text-black pl-5"
      >
        Title
      </h2>

      <BaseButton class="group">
        <div class="border-2 border-black rounded-full mr-4 p-1 h-7 min-w-24">
          <p class="font-inter leading-4 text-center text-sm text-black">
            High
          </p>
        </div>
        <div
          class="hidden group-hover:block absolute bg-white border-2 border-black rounded mt-2 min-w-24"
        >
          <a href="#" class="block pl-2 py-2 text-sm text-black text-start">Low</a>
          <a href="#" class="block pl-2 py-2 text-sm text-black text-start">Medium</a>
          <a href="#" class="block pl-2 py-2 text-sm text-black text-start">High</a>
        </div>
      </BaseButton>
    </div>

    <p
      class="font-display-pro font-semibold text-28 leading-34 text-gray-600 pl-5 pb-4 pt-6"
    >
      Cras placerat proin.
    </p>
  </div>
</template>

<script setup lang="ts">

import BaseButton from "./BaseButton.vue";


</script>
