<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold my-5">{{ meal.strMeal }}</h3>

      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
        <button
          @click="addToCart()"
          class="px-3 py-2 rounded border-2 text-white border-emerald-400 bg-emerald-400 hover:bg-emerald-500"
        >
          Add to cart
        </button>
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-3 py-2 rounded border-2 text-white border-purple-600 bg-purple-500 hover:bg-purple-600 transition-colors"
        >
          View
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../vuex/store";
import YouTubeButton from "../components/YouTubeButton.vue";

// eslint-disable-next-line no-undef, vue/no-setup-props-destructure
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});

const addToCart = () => {
  store.state.products.push(meal);
};
</script>
