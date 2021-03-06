<template>
  <div class="app-users">
    <!-- /// -->
    <div class="all-users">
      <div class="user-wrap" v-for="(user, idx) in users" :key="idx">
        <div class="user" :class="`user${idx}`">
          <div class="user-name">
            <h1>
              <router-link :to="{ name: 'user', params: { id: user.id } }">
                <span v-text="user.name"></span>
              </router-link>
              <span v-text="` #${user.id}`"></span>
            </h1>
          </div>
          <div class="user-body"><p v-text="user.email"></p></div>
        </div>
      </div>
    </div>
    <!-- /// -->
    <app-loader v-if="isLoading" class="loader" :size="50" color="#5584b9" />
    <button class="button" type="button" v-if="!$route.params.id" @click.stop="getMore">Показать еще</button>
    <!-- /// -->
  </div>
</template>
<script>
import axios from "axios";
import AppLoader from "../../$animation/AppLoader.vue";

export default {
  components: { AppLoader },
  name: "AppUsers",
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com",
      users: [],
      lastIdUser: 0,
      isLoading: null,
    };
  },
  mounted() {
    this.routerControl();
  },
  watch: {
    $route: "routerControl",
  },
  methods: {
    clearUsers() {
      this.users = [];
      this.lastIdUser = 0;
    },

    async getUser(id) {
      this.lastIdUser = id;

      this.isLoading++;

      await this.sleep(1000);
      const response = await axios.get(`${this.url}/users/${id}`);

      this.users.push(response.data);

      this.isLoading--;
    },

    async sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    async getAllUser(idArr) {
      for (const id of idArr) {
        this.getUser(id);
        await this.sleep(500);
      }
    },
    getMore() {
      this.getAllUser(this.range(5, this.lastIdUser + 1));
    },
    range(size, startAt = 1) {
      return [...Array(size).keys()].map((i) => i + startAt);
    },
    routerControl() {
      this.clearUsers();

      if (this.$route.params.id) {
        if (this.validationRouterParams()) {
          this.getUser(this.$route.params.id);
        } else {
          this.redirectToUsers();
        }
      } else {
        this.getAllUser(this.range(5, this.lastIdUser + 1));
      }
    },
    validationRouterParams() {
      let id = Number(this.$route.params.id);

      // is invalid
      if (isNaN(id)) return false;
      if (~~id !== id) return false;
      if (id < 1) return false;

      // is valid
      return true;
    },
    redirectToUsers() {
      this.$router.push({ name: "users" });
    },
  },
};
</script>
<style lang="sass" scoped>
.user
  &-wrap
    @apply tw-border tw-rounded-lg tw-border-very-dark-grayish-blue-700

    &:not(:first-of-type)
      @apply tw-mt-5

  &-name
    @apply tw-px-7 tw-py-4 tw-border-b tw-border-very-dark-grayish-blue-700

  &-body
    @apply tw-px-7 tw-py-4

.button
  @apply tw-px-7 tw-py-4 tw-mt-7 tw-uppercase tw-border tw-border-solid tw-rounded-lg tw-border-very-dark-grayish-blue-700
</style>
