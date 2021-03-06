<template>
  <div class="app-posts">
    <!-- /// -->
    <div class="all-posts">
      <div class="post-wrap" v-for="(post, idx) in posts" :key="idx">
        <div class="post" :class="`post${idx}`">
          <div class="post-title">
            <div class="post-username">
              <router-link :to="{ name: 'user', params: { id: post.userId } }"><span class="post-author" v-text="post.name"></span></router-link>
            </div>
            <h1>
              <router-link :to="{ name: 'post', params: { id: post.id } }">
                <span v-text="post.title"></span>
              </router-link>
              <span v-text="` #${post.id}`"></span>
            </h1>
          </div>
          <div class="post-body"><p v-text="post.body"></p></div>
        </div>
      </div>
    </div>
    <!-- /// -->
    <app-loader v-if="isLoading" class="loader" :size="50" color="#5584b9" />
    <button class="button" type="button" v-else-if="!$route.params.id" @click.stop="getMore">Показать еще</button>
    <!-- /// -->
  </div>
</template>

<script>
import AppLoader from "@/components/$animation/AppLoader";

import axios from "axios";

export default {
  components: { AppLoader },
  name: "AppPosts",
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com",
      posts: [],
      lastIdPost: 0,
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
    async getPost(id) {
      this.lastIdPost = id;

      this.isLoading++;

      await this.sleep(1000);
      const response = await axios.get(`${this.url}/posts/${id}`);

      this.getUser(this.posts.push(response.data) - 1);

      this.isLoading--;
    },

    async getUser(postIndex) {
      const response = await axios.get(`${this.url}/users/${this.posts[postIndex].userId}`);

      this.$set(this.posts[postIndex], "name", response.data.name);
    },

    async sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    async getAllPost(idArr) {
      for (const id of idArr) {
        this.getPost(id);
        await this.sleep(500);
      }
    },

    getMore() {
      this.getAllPost(this.range(5, this.lastIdPost + 1));
    },

    clearPosts() {
      this.posts = [];
      this.lastIdPost = 0;
    },
    range(size, startAt = 1) {
      return [...Array(size).keys()].map((i) => i + startAt);
    },
    routerControl() {
      this.clearPosts();

      if (this.$route.params.id) {
        if (this.validationRouterParams()) {
          this.getPost(this.$route.params.id);
        } else {
          this.redirectToPosts();
        }
      } else {
        this.getAllPost(this.range(5, this.lastIdPost + 1));
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
    redirectToPosts() {
      this.$router.push({ name: "posts" });
    },
  },
};
</script>

<style lang="sass" scoped>
.post
  @apply tw-border tw-rounded-lg tw-border-very-dark-grayish-blue-700 tw-mt-5

  &-username
    @apply tw-mr-4

  &-author
    @apply tw-text-moderate-blue-500

    &:hover
      @apply tw-underline

  &-title
    @apply tw-px-7 tw-py-4 tw-border-b tw-border-very-dark-grayish-blue-700

  &-body
    @apply tw-px-7 tw-py-4

.button
  @apply tw-px-7 tw-py-4 tw-mt-7 tw-uppercase tw-border tw-border-solid tw-rounded-lg tw-border-very-dark-grayish-blue-700

a
  @apply tw-whitespace-normal
</style>
