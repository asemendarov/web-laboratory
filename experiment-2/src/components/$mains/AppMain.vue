<template>
  <div class="app-main">
    <main class="main">
      <div class="main-content">
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
        <button class="button pd-15-30" type="button" @click.stop="getMore">Показать еще</button>
        <!-- /// -->
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AppMain',
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com',
      posts: [],
      lastIdPost: 0
    }
  },
  mounted() {
    this.clearPost()
    this.getPost(1)
  },
  methods: {
    clearPost() {
      this.posts = []
      this.lastIdPost = 0
    },
    getPost(id) {
      this.lastIdPost = id

      axios
        .get(`${this.url}/posts/${id}`)
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
      this.getAllPost(this.range(10, this.lastIdPost + 1))
    },
    range(size, startAt = 0) {
      return [...Array(size).keys()].map((i) => i + startAt)
    }
  }
}
</script>
<style scoped>
.main-content {
  margin-top: 32px;
  margin-inline: auto;
  padding-inline: 16px;
  max-width: 1280px;
}

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

.pd-15-30 {
  padding: 15px 30px;
}

.button {
  margin-top: 30px;

  border-radius: 7px;
  border: 1px solid #30363d;
  text-transform: uppercase;
}
</style>
