<template>
  <div class="app-users">
    <!-- /// -->
    <div class="all-users">
      <div class="user-wrap" v-for="(user, idx) in users" :key="idx">
        <div class="user" :class="`user${idx}`">
          <div class="user-name pd-15-30">
            <h1>
              <router-link :to="{ name: 'user', params: { id: user.id } }">
                <span v-text="user.name"></span>
              </router-link>
              <span v-text="`#${user.id}`"></span>
            </h1>
          </div>
          <div class="user-body pd-15-30"><p v-text="user.email"></p></div>
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
  name: 'AppUsers',
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com',
      users: [],
      lastIdUser: 0
    }
  },
  mounted() {
    this.routerControl()
  },
  watch: {
    $route: 'routerControl'
  },
  methods: {
    clearUsers() {
      this.users = []
      this.lastIdUser = 0
    },

    getUser(id) {
      this.lastIdUser = id

      axios
        .get(`${this.url}/users/${id}`)
        .then((response) => {
          this.users.push(response.data)
        })
        .catch((error) => console.log(error))
    },
    getAllUser(idArr) {
      idArr.forEach((id) => {
        this.getUser(id)
      })
    },
    getMore() {
      this.getAllUser(this.range(5, this.lastIdUser + 1))
    },
    range(size, startAt = 1) {
      return [...Array(size).keys()].map((i) => i + startAt)
    },
    routerControl() {
      this.clearUsers()

      if (this.$route.params.id) {
        if (this.validationRouterParams()) {
          this.getUser(this.$route.params.id)
        } else {
          this.redirectToUsers()
        }
      } else {
        this.getAllUser(this.range(5, this.lastIdUser + 1))
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
    redirectToUsers() {
      this.$router.push({ name: 'users' })
    }
  }
}
</script>
<style scoped>
.user-wrap {
  border: 1px solid #30363d;
  border-radius: 10px;
}

.user-wrap:not(:first-of-type) {
  margin-top: 20px;
}

.user-name {
  border-bottom: 1px solid #30363d;
}

.button {
  margin-top: 30px;

  border-radius: 7px;
  border: 1px solid #30363d;
  text-transform: uppercase;
}
</style>
