<template>
  <div class="slide">
    <div class="slide-box">
      <address class="address grid-address">
        <router-link class="link location" to="">Новокузнечный переулок 4/1</router-link>
        <router-link class="link tel" to="tel://8-945-000-00-00">8-945-000-00-00</router-link>
      </address>
      <nav class="navigation grid-navigation">
        <router-link class="link grid__item" to="">Каталог</router-link>
        <router-link class="link grid__item" to="">Доставка</router-link>
        <router-link class="link grid__item" to="">Коллекции</router-link>
        <router-link class="link grid__item" to="">Контакты</router-link>
      </nav>
      <div class="buttons">
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
/* Setting Global Grid */
.slide {
  grid-template-rows: minmax(90rem, auto);

  background: linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%),
    url('~@/assets/bgc.jpg'), #222;
  background-repeat: no-repeat;
  background-position: center;
}

/* Grid Slide Box*/

.slide-box {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(7rem, auto) minmax(4.8rem, auto) 1fr minmax(15rem, auto);
  gap: 0rem 0rem;
  grid-template-areas:
    'address'
    'navigation'
    'buttons'
    '.';
}

.address {
  grid-area: address;
}
.navigation {
  grid-area: navigation;
}
.buttons {
  grid-area: buttons;
  justify-self: center;
  align-self: end;
  text-align: center;
}

/* Grid Address*/

.grid-address {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  gap: 0rem 0.5rem;
  grid-template-areas: 'location . tel';

  align-items: center;
}

.location {
  grid-area: location;
}
.tel {
  grid-area: tel;
}

/* Grid Navigation*/

.grid-navigation {
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 1fr;
  grid-auto-rows: minmax(4.6rem, auto);

  border-block: 0.1rem solid #d4d4d4;
}

.grid-navigation .grid__item {
  display: grid;
  align-content: center;
  justify-content: center;
}

.grid-navigation .grid__item:not(:first-of-type) {
  border-left: 0.1rem solid #d4d4d4;
}

/* Other */

.button {
  margin: 0.4rem 1.5rem;
}

/* Media */

@media (max-width: 45.1rem) {
  .grid-navigation {
    grid-auto-flow: row;
  }
  .grid-navigation .grid__item:not(:first-of-type) {
    border-left: none;
    border-top: 0.1rem solid #d4d4d4;
  }
}
</style>
