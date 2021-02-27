<template>
  <footer class="slide">
    <div class="slide-box">
      <nav class="navigation-box">
        <router-link class="link" to="">Главная</router-link>
        <router-link class="link" to="">Каталог</router-link>
        <router-link class="link" to="">Поставщики</router-link>
        <router-link class="link" to="">Коллекции</router-link>
        <router-link class="link" to="">Дегустация</router-link>
        <router-link class="link" to="">Коллекция 2020</router-link>
        <router-link class="link" to="">Контакты</router-link>
      </nav>
      <div class="site-name"><p>Винный бутик LE CORTE</p></div>
      <div class="shop-number"><p>8 (945) 000-00-00</p></div>
      <div class="social">Social-Networks</div>
      <div class="copyright"><p>© le-corte.ru</p></div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      // pass
    }
  }
}
</script>
<style scoped>
.slide {
  grid-template-rows: minmax(22rem, 1fr);

  background: #998431;

  white-space: nowrap;
  font-size: 1.4rem;
}

.slide-box {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: minmax(5rem, 1fr) repeat(2, minmax(6rem, auto)) minmax(5rem, 1fr);
  grid-template-areas:
    '. . . .'
    'navigation-box navigation-box navigation-box navigation-box'
    'site-name shop-number social copyright'
    '. . . .';
}

.navigation-box {
  grid-area: navigation-box;
}
.shop-number {
  grid-area: shop-number;
}
.site-name {
  grid-area: site-name;
}
.social {
  grid-area: social;
}
.copyright {
  grid-area: copyright;
}

.navigation-box {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-auto-rows: 1fr;
}

.link,
.shop-number,
.site-name,
.social,
.copyright {
  display: grid;
  justify-content: center;
  align-content: center;
}

.shop-number,
.site-name,
.social,
.copyright {
  border: 0.1rem solid #ffffff;
  border-left: none;
  font-weight: 600;
}

.link {
  border-top: 0.1rem solid #ffffff;
}

.copyright {
  border-right: none;
}

.site-name,
.copyright {
  text-transform: uppercase;
}

@media (max-width: 64rem) {
  .slide-box {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(5rem, 1fr) repeat(4, minmax(3rem, auto)) minmax(5rem, 1fr);
    grid-template-areas:
      '. .'
      'navigation-box site-name'
      'navigation-box shop-number'
      'navigation-box social'
      'navigation-box copyright'
      '. .';
    white-space: normal;
    text-align: center;
  }

  .navigation-box {
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(4rem, 1fr);
  }

  .link {
    border: none;
  }

  .shop-number,
  .site-name,
  .social,
  .copyright {
    border: none;
  }
}
</style>
