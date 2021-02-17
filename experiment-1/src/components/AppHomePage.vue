<template>
  <div class="homepage">
    <div class="first-screen-container">
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
        <router-link class="link" to="">Винная карта</router-link>
        <div class="separator"></div>
        <router-link class="link" to="">Дегустация</router-link>
      </div>
    </div>

    <div class="text-container">
      <div class="content-box">
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

.first-screen-container {
  margin: 0 auto;
  padding-top: 10px;

  max-width: 1920px;
  min-height: 900px;

  background: linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%),
    url('~@/assets/bgc.jpg'), #ededed;
}

address {
  font-style: inherit;
}

.main-address {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
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

  max-width: 415px;
}

.buttons > .link {
  padding: 15px 15px;

  flex: 1;

  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #99862a;
}

.buttons > .separator {
  width: 30px;
  max-width: 30px;
}

.link {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.text-container {
  margin: 0 auto;
  padding: 100px 0;

  max-width: 1920px;
  min-height: 856px;

  background: #282828;
}

.content-box {
  margin: 0 auto;
  padding: 60px 0;

  max-width: 1110px;
  min-height: 656px;

  border: 3px solid #c4c4c4;
}

.aligncenter {
  text-align: center;
}

.content-box h1,
.content-box p {
  margin: 0 auto;
  max-width: 733px;
}

.content-box hr {
  margin: 40px auto;
  max-width: 160px;
}

.content-box img {
  margin-top: 50px;
}
</style>
