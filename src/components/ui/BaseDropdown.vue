<template>
  <div class="group">
    <div
      class="relative rounded-full mr-4 text-white pt-0 px-5"
      :class="priorityClass"
    >
      <div
        @click="changeToPlaceHolder"
        @click.stop="openDropDown"
        class="rounded-full cursor-pointer font-inter flex justify-between"
      >
        {{ selectedPriority }}
        <img :src="arrowSvg" class="ml-2" />
      </div>

      <div
        v-if="isOpen"
        class="fixed top-0 left-0 h-screen w-screen"
        @click.stop="closeDropDown"
      ></div>

      <div
        v-if="isOpen"
        class="absolute bg-white border-2 border-black rounded-lg mt-3 p-2 w-28 left-0"
      >
        <ul>
          <li
            v-for="priority in priorities"
            :key="priority"
            :value="priority"
            class="cursor-pointer text-black"
            @click="selectPriority(priority)"
          >
            {{ priority }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import arrowSvg from "../../assets/svg/down-arrow.svg";

const emit = defineEmits(["update:modelValue", "change-placeholder"]);
const priorities = ["Low", "Medium", "High"] as const;
const selectedPriority = ref<(typeof priorities)[number]>(priorities[2]);
const isOpen = ref(false);

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

function openDropDown() {
  isOpen.value = true;
}

function closeDropDown() {
  isOpen.value = false;
}

function selectPriority(priority: (typeof priorities)[number]) {
  selectedPriority.value = priority;
  emit("update:modelValue", priority);
  closeDropDown();
}

function changeToPlaceHolder() {
  emit("change-placeholder");
}
</script>
