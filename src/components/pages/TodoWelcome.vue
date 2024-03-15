<template>
  <div class="flex flex-col px-4 items-center">
    <img :src="placeHolderImage" class="pt-5 max-w-48 max-h-56" />
    <p
      class="font-display-pro font-semibold text-xl leading-7 text-center text-zinc-500 pt-6"
    >
      You have no todos yet
    </p>
  </div>
</template>

<script setup lang="ts">
import placeHolderImage from "../../assets/img/placeholder.png";
</script>
