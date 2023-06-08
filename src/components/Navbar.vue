<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="bg-white shadow h-16 flex justify-between">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 transition-colors hover:bg-purple-100"
    >
      Home
    </router-link>
    <div class="flex items-center gpa-1 ml-10">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Meals
      </router-link>

      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>

      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals By Ingredient
      </router-link>
    </div>
    <div class="flex">
      <router-link
        :to="{ name: 'ProductCart' }"
        class="mr-5 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Cart
      </router-link>

      <router-link
        :to="{ name: 'guest' }"
        class="mr-5 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        LogIN
      </router-link>
    </div>
  </header>
</template>
