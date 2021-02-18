<template>
  <div class="screen first-screen">
    <div class="screen-box">
      <address class="main-address">
        <router-link class="link location" to="">Новокузнечный переулок 4/1</router-link>
        <router-link class="link tel" to="tel://8-945-000-00-00">8-945-000-00-00</router-link>
      </address>
      <nav class="main-menu">
        <router-link class="link" to="">Каталог</router-link>
        <router-link class="link" to="">Доставка</router-link>
        <router-link class="link" to="">Коллекции</router-link>
        <router-link class="link" to="">Контакты</router-link>
      </nav>
      <div class="buttons">
        <router-link class="link button" to="">Винная карта</router-link>
        <div class="separator"></div>
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
  padding-top: 10px;

  min-height: 900px;

  background: linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%),
    url('~@/assets/bgc.jpg'), #ededed;
}

.main-address {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.main-address > .location,
.main-address > .tel {
  margin: 20px 0;
}

.main-menu {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  max-width: 1110px;
}

.main-menu > .link {
  padding: 13px 13px;

  flex: 1;

  border: 1px solid #ffffff;
}

.buttons {
  margin-top: 583px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.buttons > .separator {
  padding: 5px 0;
  width: 30px;
  max-width: 30px;
}

@media (max-width: 455px) {
  .buttons {
    margin-top: 483px;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
}
</style>
