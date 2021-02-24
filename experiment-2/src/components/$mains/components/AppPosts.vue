<template>
  <div class="app-posts">
    <!-- /// -->
    <div class="all-posts">
      <div class="post-wrap" v-for="(post, idx) in posts" :key="idx">
        <div class="post" :class="`post${idx}`">
          <div class="post-title pd-15-30"><h1 v-text="post.title"></h1></div>
          <div class="post-body pd-15-30"><p v-text="post.body"></p></div>
        </div>
      </div>
    </div>
    <!-- /// -->
    <button class="button pd-15-30" type="button" v-if="!$route.params.id" @click.stop="getMore">
      Показать еще
    </button>
    <!-- /// -->
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'AppPosts',
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts',
      posts: [],
      lastIdPost: 0
    }
  },
  mounted() {
    this.routerControl()
  },
  watch: {
    $route() {
      this.routerControl()
    }
  },
  methods: {
    clearPost() {
      this.posts = []
      this.lastIdPost = 0
    },
    getPost(id) {
      this.lastIdPost = id

      axios
        .get(`${this.url}/${id}`)
        .then((response) => {
          this.posts.push(response.data)
        })
        .catch((error) => console.log(error))
    },
    getAllPost(idArr) {
      idArr.forEach((id) => {
        this.getPost(id)
      })
    },
    getMore() {
      this.getAllPost(this.range(5, this.lastIdPost + 1))
    },
    range(size, startAt = 1) {
      return [...Array(size).keys()].map((i) => i + startAt)
    },
    routerControl() {
      this.clearPost()

      if (this.$route.params.id) {
        this.getPost(this.$route.params.id)
      } else {
        this.getAllPost(this.range(5, this.lastIdPost + 1))
      }
    }
  }
}
</script>
<style scoped>
.post-wrap {
  border: 1px solid #30363d;
  border-radius: 10px;
}

.post-wrap:not(:first-of-type) {
  margin-top: 20px;
}

.post-title {
  border-bottom: 1px solid #30363d;
}

.button {
  margin-top: 30px;

  border-radius: 7px;
  border: 1px solid #30363d;
  text-transform: uppercase;
}
</style>
