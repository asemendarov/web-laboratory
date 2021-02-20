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
  grid-template-rows: minmax(767px, auto);

  background: #282828;
}

.content-box {
  margin: 129px auto 100px auto;

  position: relative;

  max-width: 1110px;
  min-height: 538px;

  border: 3px solid #c4c4c4;

  overflow: visible;
}

.img-box {
  position: absolute;
  max-width: 260px;
}

.img1 {
  top: -69px;
  left: -30px;
}

.img2 {
  top: -69px;
  right: -53px;
}

.title-content-box {
  padding: 10px 50px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-39px);

  white-space: nowrap;
  background: #282828;
}

.form-content-box {
  margin: 65px auto 80px auto;
  padding: 0 10px;

  max-width: 541px;
}

.form-content-box hr {
  margin: 65px auto 40px auto;
  max-width: 118px;
}

.form-content-box p {
  margin-bottom: 81px;
}

.form-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(50px, auto));
  grid-template-areas:
    'inputName inputTel'
    'inputAddress inputAddress'
    'submit submit';
  grid-gap: 30px 30px;
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
  border-bottom: 1px solid #fff;
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
  border: 1px solid #fff;
  text-decoration-style: solid;
  text-transform: uppercase;
}

#submit:active {
  background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 925px) {
  .img-box {
    max-width: 150px;
  }

  .img1 {
    top: -30px;
    left: -20px;
  }

  .img2 {
    top: -30px;
    right: -23px;
  }
}

@media (max-width: 800px) {
  .img-box {
    display: none;
  }
}

@media (max-width: 540px) {
  .title-content-box {
    padding-inline: 20px;
  }
}

@media (max-width: 495px) {
  .title-content-box {
    position: static;
    transform: none;
    white-space: normal;
    text-align: center;
  }
}
</style>
