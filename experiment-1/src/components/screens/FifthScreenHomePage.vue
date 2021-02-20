<template>
  <div class="slide">
    <div class="slide-box">
      <div class="content-box">
        <h1 class="title-content-box">Запись на дегустацию</h1>
        <div class="img-box img1">
          <img src="@/assets/grapes.png" alt="Виноград" />
        </div>
        <div class="img-box img2">
          <img src="@/assets/barrel-of-wine.png" alt="Бочка с вином" />
        </div>
        <div class="form-content-box">
          <hr class="aligncenter" />
          <p class="aligncenter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
            imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.
          </p>
          <form class="form-box" action="" method="post" @submit="handlePostSubmit">
            <input
              type="text"
              name="inputName"
              id="inputName"
              v-model="inputName"
              placeholder="Имя"
            />
            <input
              type="tel"
              name="inputTel"
              id="inputTel"
              v-model="inputTel"
              placeholder="Телефон"
            />
            <input
              type="text"
              name="inputAddress"
              id="inputAddress"
              v-model="inputAddress"
              placeholder="Адрес"
            />
            <input type="submit" id="submit" value="Записаться" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FifthScreenHomePage',
  data() {
    return {
      inputName: null,
      inputTel: null,
      inputAddress: null
    }
  },
  methods: {
    handlePostSubmit(e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.slide {
  grid-template-rows: minmax(76.7rem, auto);

  background: #282828;
}

.content-box {
  margin: 12.9rem auto 10rem auto;

  position: relative;

  max-width: 111rem;
  min-height: 53.8rem;

  border: 0.1rem solid #c4c4c4;

  overflow: visible;
}

.img-box {
  position: absolute;
  max-width: 26rem;
}

.img1 {
  top: -6.9rem;
  left: -3rem;
}

.img2 {
  top: -6.9rem;
  right: -5.3rem;
}

.title-content-box {
  padding: 1rem 5rem;

  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-3.9rem);

  white-space: nowrap;
  background: #282828;
}

.form-content-box {
  margin: 6.5rem auto 8rem auto;
  padding: 0 1rem;

  max-width: 54.1rem;
}

.form-content-box hr {
  margin: 6.5rem auto 4rem auto;
  max-width: 11.8rem;
}

.form-content-box p {
  margin-bottom: 8.1rem;
}

.form-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(5rem, auto));
  grid-template-areas:
    'inputName inputTel'
    'inputAddress inputAddress'
    'submit submit';
  grid-gap: 3rem 3rem;
}

#inputName {
  grid-area: inputName;
}

#inputTel {
  grid-area: inputTel;
}

#inputAddress {
  grid-area: inputAddress;
}
#submit {
  grid-area: submit;
}

input {
  border: none;
  border-bottom: 0.1rem solid #fff;
  background: inherit;
  color: #fff;
}

input::placeholder {
  color: #fff;
}

input:focus {
  outline: none;
}

#submit {
  border: 0.1rem solid #fff;
  text-decoration-style: solid;
  text-transform: uppercase;
}

#submit:active {
  background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 92.5rem) {
  .img-box {
    max-width: 15rem;
  }

  .img1 {
    top: -3rem;
    left: -2rem;
  }

  .img2 {
    top: -3rem;
    right: -2.3rem;
  }
}

@media (max-width: 80rem) {
  .img-box {
    display: none;
  }
}

@media (max-width: 54rem) {
  .title-content-box {
    padding-inline: 2rem;
  }
}

@media (max-width: 49.5rem) {
  .title-content-box {
    position: static;
    transform: none;
    white-space: normal;
    text-align: center;
  }
}
</style>
