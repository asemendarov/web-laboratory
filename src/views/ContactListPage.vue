<template>
  <div class="contact-list-page">
    <h1 class="page-title xs-text-base">Список контактов</h1>
    <msg-exception ref="exception" />
    <loader v-if="statusLoad > 0" />
    <div v-else class="contact-list">
      <table class="table">
        <thead class="table-header">
          <tr class="table-row">
            <th class="table-col xs-d-none">ID</th>
            <th class="table-col">Name</th>
            <th class="table-col">Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table-body">
          <!-- Contact List -->
          <tr class="table-row" v-for="(contactData, idx) in contactDataList" :key="idx">
            <td class="table-col col-center xs-d-none">#{{ contactData.id || "?" }}</td>
            <td class="table-col">{{ contactData.name || "Пусто" }}</td>
            <td class="table-col">{{ contactData.phone || "Пусто" }}</td>
            <!-- Control Block -->
            <td class="table-col">
              <div v-if="contactData.id" class="icon-wrap icon-control">
                <icon-pencil-square @click.native="handlerClickEditContact(contactData)" />
                <icon-person-dash-fill @click.native="handlerClickDeleteContact(contactData)" />
              </div>
            </td>
          </tr>
          <!-- Add New Contact -->
          <tr class="table-row row-new-contact">
            <td class="table-col xs-d-none">
              <div class="icon-wrap icon-none">
                <icon-keyboard />
              </div>
            </td>
            <td class="table-col">
              <input type="text" v-model="newContact.name" placeholder="Имя" :pattern="patternName" />
            </td>
            <td class="table-col">
              <input type="text" v-model="newContact.phone" placeholder="Телефон" :pattern="patternPhone" />
            </td>
            <!-- Control Block -->
            <td class="table-col">
              <div class="icon-wrap icon-control">
                <icon-person-plus-fill @click.native="handlerClickCreateContact(newContact)" />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot class="table-footer">
          <!-- pass -->
        </tfoot>
      </table>
    </div>
    <!-- Modal Window -->
    <div class="modal-window">
      <modal-warning ref="modal" />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import MsgException from "@/components/MsgException";
import ModalWarning from "@/components/modals/ModalWarning";

import APIJsonServer from "@/assets/js/APIJsonServer.js";

import IconPencilSquare from "@/components/icons/IconPencilSquare";
import IconPersonDashFill from "@/components/icons/IconPersonDashFill";
import IconPersonPlusFill from "@/components/icons/IconPersonPlusFill";
import IconKeyboard from "@/components/icons/IconKeyboard";

export default {
  components: { Loader, MsgException, ModalWarning, IconPencilSquare, IconPersonDashFill, IconPersonPlusFill, IconKeyboard },
  name: "ContactListPage",
  data() {
    return {
      // Состояние загрузки контактных данных с сервера
      statusLoad: 0,

      // Список контактных данных
      contactDataList: [],

      // Объект хранящий интерфейс для взаимодействия с сервером
      api: null,

      // Объект хранящий имя и телефон нового контакта
      newContact: {
        name: null,
        phone: null,
      },

      // Условное регулярное выражение, которое мы могли бы применять для валидации имени
      regexForName: /^[()-+,.а-яА-ЯёЁ\s\w]+$/,

      // Условное регулярное выражение, которое мы могли бы применять для валидации номера телефона
      regexForPhone: /^[()-+,.а-яА-ЯёЁ\s\w]+$/,
    };
  },
  computed: {
    // Адрес сервера
    urlServer() {
      return this.$store.state.urlServer;
    },
    // Вычисляет pattern из regex для поля name
    patternName() {
      return this.regexForName.toString().slice(1, -1);
    },
    // Вычисляет pattern из regex для поля phone
    patternPhone() {
      return this.regexForPhone.toString().slice(1, -1);
    },
  },
  mounted() {
    // Создаем интерфейс для взаимодействия с сервером
    this.api = new APIJsonServer(this.urlServer);

    // Вызываем обработчик маршрута
    this.routerControl(this.$route);
  },
  watch: {
    // При изменении маршрута вызываем его обработчик
    $route: "routerControl",
  },
  methods: {
    // Обрабатывает маршрут
    routerControl() {
      this.loadData();
    },

    // Запускает цепочку действий для запуска загрузки данных с сервера
    loadData() {
      this.statusLoad++;
      this.$refs.exception.hide();

      this.sleep()
        .then(() => this.api.get("/users"))
        .then((data) => {
          data.forEach((el) => {
            this.contactDataList.push(el);
          });
          this.statusLoad--;
        })
        .catch((ex) => {
          this.statusLoad = 0;
          this.$refs.exception.show(ex.name, ex.message);
          console.error(ex);
        });
    },

    // Загружает список контактов с сервера
    async fetchContactList() {
      await this.sleep();
      return;
    },

    // Создает эмуляцию задержки взаимодействия с сервером
    sleep(ms = 0) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    // Обрабатывает события Click на кнопке Create Contact
    handlerClickCreateContact(contactData) {
      this.showCreateContact(contactData);
    },

    // Обрабатывает события Click на кнопке Edit Contact
    handlerClickEditContact(contactData) {
      this.showEditContact(contactData);
    },

    // Обрабатывает события Click на кнопке Delete Contact
    handlerClickDeleteContact(contactData) {
      this.showDeleteContact(contactData);
    },

    // Открывает страницу для создания нового контакта в списке контактов
    showCreateContact(contactData) {
      if (!this.validationNameAndPhoneContact(contactData)) {
        this.showModalWindow("Ошибка!", "Пожалуйста, введите корректное имя и номер нового контакта");
        return;
      }

      // Проверки на уникальность отсутствует намеренно.
      // В этом есть смысл.

      this.redirectToContactInfoPage("create", contactData);
    },

    // Открывает страницу для изменения контактной информации
    showEditContact(contactData) {
      this.redirectToContactInfoPage("edit", contactData);
    },

    // Открывает страницу для удаления контакта из списка контактов
    showDeleteContact(contactData) {
      this.redirectToContactInfoPage("delete", contactData);
    },

    // Выполняет валидацию имени и номера телефона контакта
    validationNameAndPhoneContact(contactData) {
      return this.validation(this.regexForName, contactData.name) && this.validation(this.regexForPhone, contactData.phone);
    },

    // Выполняет валидацию данных
    validation(regex, value) {
      if (!(regex instanceof RegExp)) {
        throw `(${this.$options.name}) input param Regex is not RegExp`;
      }

      return value && regex.test(value);
    },

    // Сбрасывает поля нового контакта
    resetNewContact() {
      this.newContact = {
        name: null,
        phone: null,
      };
    },

    // Открывает модальное окно
    showModalWindow(title, message) {
      return this.$refs.modal.show(title, message);
    },

    // Перебрасывает на страницу контактной информации
    redirectToContactInfoPage(mode, data) {
      this.$router.push({ name: "ContactInfo", params: { mode, data } });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.contact-list-page {
  & .contact-list {
    display: flex;
    justify-content: flex-start;

    & input {
      padding: 0;

      width: 80%;
      height: 32px;

      cursor: pointer;

      border-bottom: 1px solid lighten($color-text, 65);

      &:focus {
        border-bottom-color: lighten($color-text, 20);
        cursor: text;
      }

      &:invalid {
        outline: 2px solid $color-exception;
        outline-offset: 4px;
      }
    }

    & .icon-wrap {
      margin: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      & .icon-base {
        padding: 4px;
      }
    }

    & .icon-control {
      & .icon:hover {
        color: $color-header;
      }
    }
  }
}
</style>