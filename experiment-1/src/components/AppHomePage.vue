<template>
  <div class="homepage">
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

    <div class="screen second-screen">
      <div class="screen-box">
        <h1 class="aligncenter">Лучший вкус, это вкус долголетнего вина</h1>
        <hr />
        <p class="aligncenter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
          imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
          morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices
          nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor
          purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra
          cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie
          eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis
          risus. Pellentesque scelerisque nunc, orci aliquam quis.
        </p>
        <div class="img-wrap">
          <img src="@/assets/wineglass.png" alt="Бокал вина" />
        </div>
      </div>
    </div>

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

    <div class="sceen fourth-screen">
      <div class="screen-box">
        <!-- pass -->
      </div>
    </div>

    <footer>
      <div class="screen-box">
        <!-- pass -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppHomePage',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
.homepage {
  height: inherit;
}

.screen {
  margin: 0 auto;
  max-width: 1920px;
}

.screen-box {
  margin: inherit;
  padding: 0 10px;
  max-width: 1130px;
}

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

.button {
  padding: 15px 30px;

  width: 200px;

  white-space: nowrap;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #99862a;
}

.button ~ .separator {
  padding: 5px 0;
  width: 30px;
  max-width: 30px;
}

.second-screen {
  padding: 100px 0;

  min-height: 856px;

  background: #282828;
}

.second-screen > .screen-box {
  padding: 90px 10px;
  border: 3px solid #c4c4c4;
}

.second-screen h1,
.second-screen p {
  margin: 0 auto;
  max-width: 760px;
}

.second-screen hr {
  margin: 40px auto;
  max-width: 160px;

  background: #ffffff;
  border: 1px solid #ffffff;
}

.second-screen .img-wrap {
  margin-top: 50px;
  max-width: 160px;
}

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

  .buttons {
    margin-top: 483px;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
}
</style>
