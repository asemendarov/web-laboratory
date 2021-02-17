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
        <p class="aligncenter"><img src="@/assets/wineglass.png" alt="Бокал вина" /></p>
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
        <div class="separator"></div>
        <div class="right-box">
          <p class="aligncenter"><img src="@/assets/rectangle11.png" alt="Бокал вина" /></p>
        </div>
      </div>
    </div>
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
  max-width: 1110px;
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
  max-width: 1110px;
}

.main-menu > .link {
  padding: 13px 13px;

  flex: 1;

  border: 1px solid #ffffff;
}

.buttons {
  margin: 583px auto 0 auto;

  display: flex;

  max-width: 430px;
}

.button {
  padding: 15px 30px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #99862a;
}

.buttons .button {
  flex: 1;
}

.buttons > .separator {
  width: 30px;
  max-width: 30px;
}

.second-screen {
  padding: 100px 0;

  min-height: 856px;

  background: #282828;
}

.second-screen > .screen-box {
  padding: 90px 0;
  border: 3px solid #c4c4c4;
}

.aligncenter {
  text-align: center;
}

.second-screen h1,
.second-screen p {
  margin: 0 auto;
  max-width: 733px;
}

.second-screen hr {
  margin: 40px auto;
  max-width: 160px;

  background: #ffffff;
  border: 1px solid #ffffff;
}

.second-screen img {
  margin-top: 50px;
}

.third-screen {
  padding: 80px 0;

  min-height: 1038px;

  color: #000;
  background: #e6e3c4;
}

.third-screen > .screen-box {
  padding: 80px 0;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid #998431;
  border-bottom: 1px solid #998431;
}

.third-screen .separator {
  padding: 0 5px;
  width: 115px;
  max-width: 115px;
}

.third-screen hr {
  margin: 30px 0;
  max-width: 160px;

  background: #282828;
  border: 1px solid #282828;
}

.third-screen .button {
}
</style>
