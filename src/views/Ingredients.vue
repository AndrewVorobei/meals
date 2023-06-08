<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full mb-3"
      placeholder="Search for ingredients"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>
        {{ ingredient.strDescription }}
      </p>
    </router-link>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient";

import { computed, onMounted, ref } from "vue";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  // eslint-disable-next-line vue/no-ref-as-operand
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
