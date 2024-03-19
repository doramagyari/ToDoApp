<template>
  <div
    class="cursor-default font-display-pro fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
  >
    <div
      class="mx-2 my-3 flex flex-col items-center rounded-md border text-gray-800 shadow-lg bg-white sm:mx-4 sm:mb-8 lg:mb-12"
    >
      <p class="mt-4 text-center text-xl font-bold">Deleting Todo</p>
      <p class="mt-2 px-5 text-center text-lg">
        Are you sure you want to delete this item? This operation is permanent
        and you will not be undo this action!
      </p>
      <div
        class="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 mb-2"
      >
        <BaseButton
          @click="removeTodo"
          class="whitespace-nowrap rounded-md bg-red-500 px-4 py-3 font-medium text-white"
        >
          Delete
        </BaseButton>
        <BaseButton
          class="whitespace-nowrap rounded-md bg-zinc-300 px-4 py-3 font-medium text-black"
        >
          Cancel
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

const emit = defineEmits(["remove-todo"]);

function removeTodo(index: number) {
  emit("remove-todo", index);
}
</script>
