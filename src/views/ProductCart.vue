<template>
  <div class="flex justify-center">
    <div class="flex flex-col mt-10 w-[50%] border rounded-xl bg-white">
      <header class="text-center text-3xl my-3">Ваша корзина</header>

      <main class="flex flex-col gap-y-10 m-10">
        <div
          v-for="(product, index) in products"
          :key="product.strMeal"
          class="flex justify-between border rounded-2xl"
        >
          <p class="p-[10px] text-xl">
            {{ product.strMeal }}
          </p>

          <button
            @click="remove(index)"
            class="p-[10px] text-xl text-rose-800 hover:text-rose-400"
          >
            Удалить позицию
          </button>
        </div>
        <div class="text-center py-10" v-if="!products.length">
          <p>Корзина пуста</p>
        </div>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const products = store.state.products;

const remove = (index) => {
  products.splice(index, 1);
};
</script>
