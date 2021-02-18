<template>
  <div class="screen first-screen">
    <div class="screen-box">
      <address class="main-address flex-box">
        <router-link class="link location" to="">Новокузнечный переулок 4/1</router-link>
        <router-link class="link tel" to="tel://8-945-000-00-00">8-945-000-00-00</router-link>
      </address>
      <nav class="main-menu flex-box">
        <router-link class="link flex__item" to="">Каталог</router-link>
        <router-link class="link flex__item" to="">Доставка</router-link>
        <router-link class="link flex__item" to="">Коллекции</router-link>
        <router-link class="link flex__item" to="">Контакты</router-link>
      </nav>
      <div class="buttons flex-box">
        <router-link class="link button" to="">Винная карта</router-link>
        <router-link class="link button" to="">Дегустация</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstScreenHomePage',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.first-screen {
  min-height: 900px;

  background: linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%),
    url('~@/assets/bgc.jpg'), #ededed;
}

.main-address.flex-box {
  padding: 20px 0;
  justify-content: space-between;
}

.main-menu.flex-box {
  flex-wrap: nowrap;
}

.main-menu.flex-box .flex__item {
  padding: 13px 13px;

  flex: 1;

  border: 1px solid #ffffff;
}

.main-menu.flex-box .flex__item:first-of-type {
  border-left: none;
}

.main-menu.flex-box .flex__item:last-of-type {
  border-right: none;
}

.buttons.flex-box {
  padding-top: 563px;
  flex-flow: row wrap;
  justify-content: center;
}

.button {
  margin: 5px 15px;
}

@media (max-width: 445px) {
  .main-menu.flex-box {
    flex-direction: column;
  }
  .main-menu.flex-box .flex__item {
    border-left: none;
    border-right: none;
  }
  .buttons.flex-box {
    padding-top: 363px;
  }
}
</style>
