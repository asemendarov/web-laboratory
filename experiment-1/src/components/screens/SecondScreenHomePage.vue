<template>
  <div class="slide">
    <div class="slide-box">
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
        <div class="img-box">
          <img src="@/assets/wineglass.png" alt="Бокал вина" />
        </div>
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
.slide {
  grid-template-rows: minmax(856px, auto);

  background: #282828;
}

.content-box {
  margin: 100px auto;
  padding: 90px 10px;

  max-width: 1110px;

  border: 3px solid #c4c4c4;
}

.content-box h1,
.content-box p {
  margin: 0 auto;

  max-width: 760px;
}

.content-box hr {
  margin: 40px auto;

  max-width: 160px;

  background: #ffffff;
  border: 1px solid #ffffff;
}

.img-box {
  margin: 50px auto 0 auto;
  max-width: 160px;
}
</style>
