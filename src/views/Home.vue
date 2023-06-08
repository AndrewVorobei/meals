<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="flex flex-col p-8">
    <div
      v-for="resp of response"
      :key="resp"
      class="border-4 bg-slate-300 p-2 m-3"
    >
      {{ resp.id }}. {{ resp.body }}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const response = ref({});

onMounted(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
    response.value = data;
  });
});
</script>

<style></style>
