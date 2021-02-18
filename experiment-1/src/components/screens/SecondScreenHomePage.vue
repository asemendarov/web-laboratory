<template>
  <div class="screen second-screen">
    <div class="screen-box">
      <h1 class="aligncenter">Лучший вкус, это вкус долголетнего вина</h1>
      <hr />
      <p class="aligncenter">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
        imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
        morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices
        nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor
        purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras
        sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit
        duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus.
        Pellentesque scelerisque nunc, orci aliquam quis.
      </p>
      <div class="img-wrap">
        <img src="@/assets/wineglass.png" alt="Бокал вина" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondScreenHomePage',
  data() {
    return {
      // pass
    }
  }
}
</script>

<style scoped>
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
</style>
