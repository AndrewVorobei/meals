import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";

import GuestLayout from "../components/GuestLayout.vue";
import GuestAutorization from "../views/GuestAutorization.vue";
import GuestPopup from "../views/GuestPopup.vue";

import Home from "../views/Home.vue";

import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients";

import Cart from "../components/Cart";
import YourCart from "../views/ProductCart.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },

      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },

      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },

      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },

      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },

  {
    path: "/guest",
    component: GuestLayout,
    children: [
      {
        path: "/guest",
        name: "guest",
        component: GuestAutorization,
      },

      {
        path: "/popup",
        name: "popup",
        component: GuestPopup,
      },
    ],
  },

  {
    path: "/cart",
    component: Cart,
    children: [
      {
        path: "/cart",
        name: "ProductCart",
        component: YourCart,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
