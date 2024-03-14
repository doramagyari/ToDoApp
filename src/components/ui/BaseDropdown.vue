<template>
  <div class="group">
    <Listbox v-model="selectedPriority">
      <ListboxButton
        :class="[
          'rounded-full mr-4 p-1 h-6 text-white pt-0 px-6',
          { 'bg-orange-600': selectedPriority === 'High' },
          { 'bg-amber-500': selectedPriority === 'Medium' },
          { 'bg-cyan-500': selectedPriority === 'Low' },
        ]"
        >{{ selectedPriority }}</ListboxButton
      >
      <ListboxOptions
        class="cursor-default absolute bg-white border-2 border-black rounded-lg min-w-24 mt-1 p-2"
      >
        <ListboxOption
          v-for="priority in priorities"
          :key="priority"
          :value="priority"
        >
          {{ priority }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

const priorities: string[] = ["Low", "Medium", "High"];
const selectedPriority = ref<string>(priorities[2]);
</script>
