<template>
  <div
    class="fixed inset-0 z-10 focus:outline-none"
    tabindex="-1"
    @keydown.esc="close"
  >
    <div class="fixed inset-0 bg-black bg-opacity-80" @click="close"></div>
    <div
      class="relative bg-slate-700 max-w-[600px] mx-auto my-8 flex flex-col rounded-lg shadow-indigo-500/50"
    >
      <div class="p-2 text-right">
        <button class="p-2 focus:outline-none" @click="close">X</button>
      </div>
      <h1 class="text-zink-200 text-center text-2xl">Зарегестрироваться</h1>
      <main class="flex flex-col items-start ml-4">
        <form name="sgnin" class="flex flex-col" autocomplete="on">
          <label for="name">Введите имя:</label>
          <input
            v-model="user.name"
            id="name"
            type="text"
            class="mb-5 rounded-xl bg-slate-400 focus:bg-slate-500"
          />

          <label for="secondName">Введите фамилию:</label>
          <input
            v-model="user.secondName"
            id="secondName"
            type="text"
            class="mb-5 rounded-xl bg-slate-400 focus:bg-slate-500"
          />

          <label for="login">Введите логин:</label>
          <input
            v-model="user.login"
            id="text"
            type="text"
            class="mb-5 rounded-xl bg-slate-400 focus:bg-slate-500"
          />

          <label for="password">Введите пароль:</label>
          <input
            v-model="user.password"
            id="password"
            type="password"
            autocomplete="on"
            class="mb-5 rounded-xl bg-slate-400 focus:bg-slate-500"
          />
        </form>
      </main>
      <footer class="flex flex-col justify-center my-10">
        <p class="mb-6 text-lg text-center text-red-600">
          <label v-if="isEmpty()">Пожалуйста, заполните полe </label>
        </p>
        <button
          @click="sendForm"
          class="text-center border-2 rounded-lg border-l-rose-100 transition-colors hover:bg-slate-500"
        >
          <p class="p-2">Отправить форму</p>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import store from "../vuex/store";

export default {
  components: {},

  emits: ["close"],

  data() {
    return {
      users: store.state.users,
      user: {
        name: "",
        secondName: "",
        login: "",
        password: "",
      },
    };
  },

  methods: {
    close() {
      this.$emit("close");
      this.user = {};
    },

    sendForm() {
      this.users.push(this.user);
      localStorage.setItem("password", this.user.password);
      localStorage.setItem("login", this.user.login);
      this.close();
    },

    isEmpty() {
      for (let values of Object.values(this.user)) {
        if (values != "") {
          return false;
        }
      }
      return true;
    },
  },
};
</script>
