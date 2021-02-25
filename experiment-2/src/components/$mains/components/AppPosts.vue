<template>
  <div class="app-posts">
    <!-- /// -->
    <div class="all-posts">
      <div class="post-wrap" v-for="(post, idx) in posts" :key="idx">
        <div class="post" :class="`post${idx}`">
          <div class="post-title pd-15-30">
            <div class="post-username mr-16">
              <router-link :to="{ name: 'user', params: { id: post.userId } }"
                ><span class="post-author" v-text="post.name"></span
              ></router-link>
            </div>
            <h1>
              <router-link :to="{ name: 'post', params: { id: post.id } }">
                <span v-text="post.title"></span>
              </router-link>
              <span v-text="`#${post.id}`"></span>
            </h1>
          </div>
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
      url: 'https://jsonplaceholder.typicode.com',
      posts: [],
      lastIdPost: 0
    }
  },
  mounted() {
    this.routerControl()
  },

  watch: {
    $route: 'routerControl'
  },
  methods: {
    getPost(id) {
      this.lastIdPost = id

      axios
        .get(`${this.url}/posts/${id}`)
        .then((response) => {
          this.getUser(this.posts.push(response.data) - 1)
        })
        .catch((error) => console.log(error))
    },
    getUser(postIndex) {
      axios
        .get(`${this.url}/users/${this.posts[postIndex].userId}`)
        .then((response) => {
          this.$set(this.posts[postIndex], 'name', response.data.name)
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
    clearPosts() {
      this.posts = []
      this.lastIdPost = 0
    },
    range(size, startAt = 1) {
      return [...Array(size).keys()].map((i) => i + startAt)
    },
    routerControl() {
      this.clearPosts()

      if (this.$route.params.id) {
        if (this.validationRouterParams()) {
          this.getPost(this.$route.params.id)
        } else {
          this.redirectToPosts()
        }
      } else {
        this.getAllPost(this.range(5, this.lastIdPost + 1))
      }
    },
    validationRouterParams() {
      let id = Number(this.$route.params.id)

      // is invalid
      if (isNaN(id)) return false
      if (~~id !== id) return false
      if (id < 1) return false

      // is valid
      return true
    },
    redirectToPosts() {
      this.$router.push({ name: 'posts' })
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

.post-author {
  color: rgb(85, 132, 185);
}

.post-author:hover {
  text-decoration: underline;
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

a {
  white-space: normal;
}
</style>
