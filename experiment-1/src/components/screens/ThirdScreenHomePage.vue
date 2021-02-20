<template>
  <div class="slide">
    <div class="slide-box">
      <div class="content-box grid-box">
        <div class="left-box grid-box">
          <p>Новинки коллекций</p>
          <h1>Март 1980 Урожай Марселя</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
            imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
            morbi sodales ac.
          </p>
          <table class="aligncenter">
            <tr>
              <td>1980</td>
              <td>
                <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                <p>Красочная бутылка вина из Марселя</p>
              </td>
            </tr>
            <tr>
              <td>1980</td>
              <td>
                <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                <p>Красочная бутылка вина из Марселя</p>
              </td>
            </tr>
            <tr>
              <td>1980</td>
              <td>
                <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                <p>Красочная бутылка вина из Марселя</p>
              </td>
            </tr>
          </table>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
            imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
            morbi sodales ac.
          </p>
          <router-link class="link button" to="">Узнать подробнее</router-link>
        </div>
        <div class="right-box grid-box">
          <div class="img-wrap grid__item">
            <img src="@/assets/rectangle11.png" alt="Бокал вина" />
          </div>
          <div class="img-wrap grid__item">
            <img src="@/assets/rectangle12.jpg" alt="Бокал вина" />
          </div>
          <div class="img-wrap grid__item">
            <img src="@/assets/rectangle13.jpg" alt="Бокал вина" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdScreenHomePage',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.slide {
  grid-template-rows: minmax(103.8rem, auto);

  color: #000;
  background: #e6e3c4;
}

.content-box {
  margin: 8rem 0;
  padding: 6rem 1rem;

  border-top: 0.1rem solid #998431;
  border-bottom: 0.1rem solid #998431;
}

.content-box.grid-box {
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}

.left-box.grid-box {
  max-width: 54rem;
  row-gap: 3rem;
}

.right-box.grid-box {
  max-width: 54rem;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  gap: 2.2rem 3rem;
}

.right-box.grid-box > .grid__item:first-of-type {
  grid-column: span 2;
  grid-row: span 2;
}

.left-box h1 {
  max-width: 31rem;
}

.left-box hr {
  max-width: 16rem;

  background: #282828;
  border: 0.1rem solid #282828;
}

.button {
  margin-right: auto;
}

table {
  border-collapse: collapse;
}

tr:not(:last-of-type) {
  border-bottom: 0.1rem solid #282828;
}

td:not(:first-of-type) {
  border-left: 0.1rem solid #282828;
}

td:first-of-type {
  padding: 2.6rem 2.4rem;
}
td:not(:first-of-type) {
  padding: 1rem 3rem 1.5rem 3rem;
}

@media (max-width: 91.5rem) {
  .content-box.grid-box {
    grid-template-columns: 1fr;
  }
  .right-box.grid-box {
    order: -1;
    margin-bottom: 2rem;
  }
  .button {
    margin: auto;
  }
}
</style>
