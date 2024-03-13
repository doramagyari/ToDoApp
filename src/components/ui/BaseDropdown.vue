<template>
  <div class="group">
    <Listbox v-model="selectedPriority">
      <ListboxButton 
        class="border-2 border-black rounded-full mr-4 p-1 h-7 min-w-24 "
        >{{ selectedPriority }}</ListboxButton
      >
      <ListboxOptions
        class="bg-white border-2 border-black rounded-lg max-w-24 mt-2 pl-2"
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
