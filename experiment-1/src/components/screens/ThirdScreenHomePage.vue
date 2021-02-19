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
  grid-template-rows: minmax(1038px, auto);

  color: #000;
  background: #e6e3c4;
}

.content-box {
  margin: 80px 0;
  padding: 60px 10px;

  border-top: 1px solid #998431;
  border-bottom: 1px solid #998431;
}

.content-box.grid-box {
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}

.left-box.grid-box {
  max-width: 540px;
  row-gap: 30px;
}

.right-box.grid-box {
  max-width: 540px;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  gap: 22px 30px;
}

.right-box.grid-box > .grid__item:first-of-type {
  grid-column: span 2;
  grid-row: span 2;
}

.left-box h1 {
  max-width: 310px;
}

.left-box hr {
  max-width: 160px;

  background: #282828;
  border: 1px solid #282828;
}

.button {
  margin-right: auto;
}

table {
  border-collapse: collapse;
}

tr:not(:last-of-type) {
  border-bottom: 1px solid #282828;
}

td:not(:first-of-type) {
  border-left: 1px solid #282828;
}

td:first-of-type {
  padding: 26px 24px;
}
td:not(:first-of-type) {
  padding: 10px 30px 15px 30px;
}

@media (max-width: 915px) {
  .content-box.grid-box {
    grid-template-columns: 1fr;
  }
  .right-box.grid-box {
    order: -1;
    margin-bottom: 20px;
  }
  .button {
    margin: auto;
  }
}
</style>
