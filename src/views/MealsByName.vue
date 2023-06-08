<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full focus:border-gray-400"
      placeholder="Search field"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import store from "../vuex/store";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

// import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const keyword = ref("");

// eslint-disable-next-line no-unused-vars
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
