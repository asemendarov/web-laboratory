Vue.component("bbb", {
  props: {
    title: String,
  },
  data() {
    return {
      message: "Привет, МИР!!!",
    };
  },
  template: `
  <div class="container">
    <h3>{{title}}</h3>
    <div class="container-m-h">
        <slot></slot>
    </div>
  </div>
  `,
});

var vm = new Vue({
  el: "#main",
  data: {
    imgFace: "./img/face.jpg",
    fullname: "Иванов Иван Иваныч",
    sex: "Мужчина",
    birthDate: new Date(1995, 9, 11),
    residence: "Москва, м. ВДНХ",
    tel: "+7 (985) 0000000",
    email: "junior@example.eu",
    citizenship: "Россия",
    isReadyToMove: false,
    isReadyToBusinessTrips: false,
  },
  computed: {
    birthDateISOString() {
      return this.birthDate.toISOString().slice(0, 10).replaceAll("-", ".");
    },
    age() {
      return (
        ((new Date().getTime() - new Date(this.birthDate)) /
          (24 * 3600 * 365.25 * 1000)) |
        0
      );
    },
    readyToMove() {
      return this.isReadyToMove ? "готов к переезду" : "не готов к переезду";
    },
    readyToBusinessTrips() {
      return this.isReadyToMove
        ? "готов к командировкам"
        : "не готов к командировкам";
    },
  },
  methods: {
    //   fuck name
    get_sex_birthDateISOString_age() {
      return `${this.sex}, ${this.age}, родился ${this.birthDateISOString}`;
    },
  },
});
