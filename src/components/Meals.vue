<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There Are No Meals
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
