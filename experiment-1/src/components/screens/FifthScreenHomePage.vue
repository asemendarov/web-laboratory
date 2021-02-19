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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FifthScreenHomePage',
  data() {
    return {
      // pass
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

@media (max-width: 705px) {
  .title-content-box {
    padding: 10px 20px;
  }

  .img1 {
    top: auto;
    bottom: -40px;
    left: -20px;
  }

  .img2 {
    top: auto;
    bottom: -30px;
    right: -23px;
  }
}

@media (max-width: 495px) {
  .title-content-box {
    font-size: 18px;
    transform: translateX(-50%) translateY(-27px);
  }

  .img-box {
    visibility: hidden;
  }
}

@media (max-width: 495px) {
  .title-content-box {
    font-size: 18px;
    transform: translateX(-50%) translateY(-27px);
  }

  .img-box {
    visibility: hidden;
  }
}

@media (max-width: 275px) {
  .title-content-box {
    position: static;
    transform: none;
    white-space: normal;
    text-align: center;
  }

  .img-box {
    visibility: hidden;
  }
}
</style>
