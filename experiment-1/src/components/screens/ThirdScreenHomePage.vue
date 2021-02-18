<template>
  <div class="screen third-screen">
    <div class="screen-box">
      <div class="left-box">
        <p>Новинки коллекций</p>
        <h1>Март 1980 Урожай Марселя</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
          imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
          morbi sodales ac.
        </p>
        <table>
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
      <div class="right-box flex-box">
        <div class="img-wrap"><img src="@/assets/rectangle11.png" alt="Бокал вина" /></div>
        <div class="flex-box">
          <div class="img-wrap"><img src="@/assets/rectangle12.jpg" alt="Бокал вина" /></div>
          <div class="img-wrap"><img src="@/assets/rectangle13.jpg" alt="Бокал вина" /></div>
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
.third-screen {
  padding: 80px 0;

  min-height: 1038px;

  color: #000;
  background: #e6e3c4;
}

.third-screen > .screen-box {
  padding: 60px 10px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  border-top: 1px solid #998431;
  border-bottom: 1px solid #998431;
}

.third-screen hr {
  margin: 30px 0;
  max-width: 160px;

  background: #282828;
  border: 1px solid #282828;
}

.third-screen .left-box {
  padding-right: 10px;
}

.third-screen .left-box h1 {
  max-width: 310px;
}

.third-screen .left-box > p:nth-of-type(1) {
  padding-bottom: 30px;
  max-width: 347px;
}

.third-screen .left-box > p:nth-of-type(2) {
  padding-bottom: 30px;

  max-width: 445px;
}

.third-screen .left-box > p:nth-of-type(3) {
  padding: 30px 0;

  max-width: 445px;
}

table {
  border-collapse: collapse;
  white-space: nowrap;
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

.right-box {
  max-width: 540px;
}

.right-box.flex-box {
  flex-flow: column nowrap;
}

.right-box.flex-box > .flex-box {
  flex-flow: row nowrap;
}

.right-box.flex-box > div:not(:last-of-type) {
  padding-bottom: 23px;
}

.right-box.flex-box .flex-box > div:not(:last-of-type) {
  padding-right: 30px;
}

.third-screen .img-wrap {
  max-width: 540px;
}

.third-screen .button {
  width: 254px;
}

@media (max-width: 800px) {
  .third-screen > .screen-box {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
}

@media (max-width: 455px) {
  table {
    white-space: normal;
  }
}
</style>
