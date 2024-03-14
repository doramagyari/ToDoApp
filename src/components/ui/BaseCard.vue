<template>
  <div
    class="box-border bg-white border-2 border-black rounded-lg sm:mx-4 sm:mb-8 lg:mb-12"
  >
    <div class="flex justify-between mt-3">
      <BaseTitle></BaseTitle>
      <BaseDropdown></BaseDropdown>
    </div>
    <div class="flex justify-between">
      <BaseDecription></BaseDecription>
      <BaseCheck></BaseCheck>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDropdown from "./BaseDropdown.vue";
import BaseTitle from "./BaseTitle.vue";
import BaseDecription from "./BaseDescription.vue";
import BaseCheck from "./BaseCheck.vue";


</script>
