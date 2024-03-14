<template>
  <div class="group">
    <Listbox v-model="selectedPriority">
      <ListboxButton
        :class="priorityClass"
        class="rounded-full mr-4 p-1 h-6 text-white pt-0 px-6"
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
import { ref, computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

const priorities = ["Low", "Medium", "High"] as const;
const selectedPriority = ref<typeof priorities[number]>(priorities[2]);

const priorityClass = computed(() => {
  if (selectedPriority.value === "High") {
    return "bg-orange-600";
  }
  if (selectedPriority.value === "Medium") {
    return "bg-amber-500";
  }
  if (selectedPriority.value === "Low") {
    return "bg-cyan-500";
  }
});
</script>
