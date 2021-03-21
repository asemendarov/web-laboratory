<template>
  <div class="contact-list-page">
    <h1 class="page-title xs-text-base">Список контактов</h1>
    <msg-exception ref="exception" />
    <loader v-if="statusLoad" />
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
              <!-- Отключаем блок управления для контакта, у которого могло бы отсутствовать ID -->
              <div v-show="contactData.id" class="icon-control icon-wrap">
                <icon-pencil-square @click.native="handlerClickEditContact(contactData)" />
                <icon-person-dash-fill @click.native="handlerClickDeleteContact(contactData)" />
              </div>
            </td>
          </tr>
          <!-- Add New Contact -->
          <tr class="table-row row-new-contact">
            <td class="table-col xs-d-none">
              <div class="icon-none icon-wrap">
                <icon-keyboard />
              </div>
            </td>
            <td class="table-col">
              <input-text-with-cancel v-model="newContact.name" placeholder="Имя" />
            </td>
            <td class="table-col">
              <input-text-with-cancel v-model="newContact.phone" placeholder="Телефон" />
            </td>
            <!-- Control Block -->
            <td class="table-col">
              <div class="icon-control icon-wrap">
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
// Import JS
import APIJsonServer from "@/assets/js/APIJsonServer.js";
// Import Basic Components
import Loader from "@/components/Loader";
import MsgException from "@/components/MsgException";
import ModalWarning from "@/components/modals/ModalWarning";
// Import Input Components
import InputTextWithCancel from "@/components/InputTextWithCancel";
// Import Icon Components
import IconPencilSquare from "@/components/icons/IconPencilSquare";
import IconPersonDashFill from "@/components/icons/IconPersonDashFill";
import IconPersonPlusFill from "@/components/icons/IconPersonPlusFill";
import IconKeyboard from "@/components/icons/IconKeyboard";

export default {
  components: { Loader, MsgException, InputTextWithCancel, ModalWarning, IconPencilSquare, IconPersonDashFill, IconPersonPlusFill, IconKeyboard },
  name: "ContactListPage",
  data() {
    return {
      // Состояние загрузки контактных данных
      statusLoad: null,

      // Список контактных данных
      contactDataList: [],

      // Объект хранящий интерфейс для взаимодействия с сервером
      api: null,

      // Объект хранящий имя и телефон нового контакта
      newContact: {
        name: null,
        phone: null,
      },
    };
  },
  computed: {
    // Адрес сервера
    urlServer() {
      return this.$store.state.urlServer;
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
      // Запускаем загрузку данных
      this.loadData();
    },

    // Запускает цепочку действий для запуска загрузки данных с сервера
    loadData() {
      // Включаем визуальное представление загрузки
      this.statusLoad++;

      // Принудительно отключаем старое сообщение об ошибке
      this.$refs.exception.hide();

      // Отправляем запрос на получение списка контактов
      this.sleep()
        .then(() => this.api.get("/users"))
        .then((data) => {
          // Фиксируем данные на стороне клиента в случаи успешной загрузки
          data.forEach((el) => {
            this.contactDataList.push(el);
          });
        })
        .catch((ex) => {
          // Выводим сообщение об ошибке в случаи отказа
          this.$refs.exception.show(ex.name, ex.message);
          console.error(ex);
        })
        .finally(() => {
          // Отключаем визуальное представление загрузки
          this.statusLoad--;
        });
    },

    // Создает эмуляцию задержки взаимодействия с сервером
    sleep(ms = 1000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    // Обрабатывает события Click на кнопке Create Contact
    handlerClickCreateContact(contactData) {
      // Вызываем метод открытия страницы для создания нового контакта
      this.showCreateContact(contactData);
    },

    // Обрабатывает события Click на кнопке Edit Contact
    handlerClickEditContact(contactData) {
      // Вызываем метод открытия страницы для изменения контакта
      this.showEditContact(contactData);
    },

    // Обрабатывает события Click на кнопке Delete Contact
    handlerClickDeleteContact(contactData) {
      // Вызываем метод открытия страницы для удаления контакта
      this.showDeleteContact(contactData);
    },

    // Открывает страницу для создания нового контакта в списке контактов
    showCreateContact(contactData) {
      // Выполняем базовую проверку на пустую строку.
      if (this.emptyStringValidator(contactData.name) || this.emptyStringValidator(contactData.phone)) {
        this.showModalWindow("Ошибка!", "Имя контакта и номер телефона не должны быть пустыми!");
        return;
      }

      /*
       ** Проверки на уникальность отсутствует намеренно.
       ** В этом есть смысл.
       */

      // Перебрасываем на страницу контактной информации в режиме create
      this.redirectToContactInfoPage("create", contactData);
    },

    // Открывает страницу для изменения контактной информации
    showEditContact(contactData) {
      // Перебрасываем на страницу контактной информации в режиме edit
      this.redirectToContactInfoPage("edit", contactData);
    },

    // Открывает страницу для удаления контакта из списка контактов
    showDeleteContact(contactData) {
      // Перебрасываем на страницу контактной информации в режиме delete
      this.redirectToContactInfoPage("delete", contactData);
    },

    // Проверяет является ли строка пустой
    emptyStringValidator(str) {
      return /^[\s]*$/.test(str ?? "");
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
      height: 32px;
    }

    & .table {
      & .table-col {
        height: 45px;
        min-height: 45px;
      }
    }

    & .icon-control {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }
  }
}
</style>