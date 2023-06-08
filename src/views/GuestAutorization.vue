<template>
  <div class="">
    <div class="pt-[100px] flex justify-center">
      <div
        class="flex flex-col w-[50vw] h-auto border border-gray-500 rounded-3xl bg-slate-700"
      >
        <h1 class="flex mt-4 text-2xl font-bold justify-center text-zinc-200">
          Поле авторизации
        </h1>
        <hr class="mt-5" />
        <main class="flex flex-col items-center ml-4 text-zinc-200">
          <form name="signin" class="flex flex-col w-[40%]">
            <label for="email" class="my-4 text-lg">Введите логин:</label>
            <input
              id="emailAutorize"
              autofocus
              type="email"
              class="rounded-xl bg-slate-400 focus:bg-slate-500 text-stone-100"
            />
            <label for="password" class="my-4 text-lg">Введите пароль:</label>
            <input
              id="passwordAutorize"
              type="password"
              class="rounded-xl bg-slate-400 focus:bg-slate-500"
            />
          </form>

          <button
            @click="enter"
            class="mt-10 text-center border-2 rounded-lg border-l-rose-100 transition-colors hover:bg-slate-500"
          >
            <p class="p-2">Войти</p>
          </button>
          <p class="mt-20 text-lg">
            Или создайте новый аккаунт:
            <button
              @click="isModalOpen = true"
              class="ml-2 text-center border-2 rounded-lg border-l-rose-100 transition-colors hover:bg-slate-500"
            >
              <p class="p-2">Создать</p>
            </button>

            <GuestPopup v-show="isModalOpen" @close="isModalOpen = false">
            </GuestPopup>
          </p>
        </main>
        <hr class="mt-5" />
        <footer class="flex justify-center">
          <h1
            class="flex my-4 ml-2 text-left text-l font-semibold text-zinc-300"
          >
            Контактная информация:
            <p class="ml-4">+7-999-888-33-55</p>
          </h1>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import GuestPopup from "../views/GuestPopup.vue";

export default {
  components: {
    GuestPopup,
  },

  data() {
    return {
      isModalOpen: false,
      user: {
        login: "",
        password: "",
      },
    };
  },

  methods: {
    enter() {
      if (
        this.user.login &&
        this.user.password !== Object.values(Object.keys(localStorage.key()))
      ) {
        alert("Неправильные логин или пароль!");
      }
      alert("Вы авторизовались!");
    },
  },
};
</script>
