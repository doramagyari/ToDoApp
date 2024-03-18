<template>
  <nav class="flex group mt-16 sticky justify-between my-10 sm:px-4">
    <h2 class="font-display font-semibold text-black text-4xl leading-10">
      To do list
    </h2>
    <BaseButton>
      <PlusCircleIcon class="h-10 w-10 text-emerald-500" />
    </BaseButton>
  </nav>
</template>

<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
</script>
