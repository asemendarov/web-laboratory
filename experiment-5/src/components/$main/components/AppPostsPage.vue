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
              <span v-text="`#${post.id}`"></span>
            </h1>
          </div>
          <div class="post-body"><p v-text="post.body"></p></div>
        </div>
      </div>
    </div>
    <!-- /// -->
    <button class="button" type="button" v-if="!$route.params.id" @click.stop="getMore">Показать еще</button>
    <!-- /// -->
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AppPosts",
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com",
      posts: [],
      lastIdPost: 0,
    };
  },
  mounted() {
    this.routerControl();
  },

  watch: {
    $route: "routerControl",
  },
  methods: {
    getPost(id) {
      this.lastIdPost = id;

      axios
        .get(`${this.url}/posts/${id}`)
        .then((response) => {
          this.getUser(this.posts.push(response.data) - 1);
        })
        .catch((error) => console.log(error));
    },
    getUser(postIndex) {
      axios
        .get(`${this.url}/users/${this.posts[postIndex].userId}`)
        .then((response) => {
          this.$set(this.posts[postIndex], "name", response.data.name);
        })
        .catch((error) => console.log(error));
    },
    getAllPost(idArr) {
      idArr.forEach((id) => {
        this.getPost(id);
      });
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
  &-wrap
    @apply tw-border tw-rounded-lg tw-border-very-dark-grayish-blue-700

    &:not(:first-of-type)
      @apply tw-mt-5

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
