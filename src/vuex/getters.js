import store from "./store";

export default {
  savedUsers() {
    return store.state.users;
  },
};
