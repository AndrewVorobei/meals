<template>
  <Meals :meals="meals" />
</template>

<script setup>
import store from "../vuex/store";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
