<template>
  <div class="contact-info-page">
    <h1 class="page-title xs-text-base">Контактная информация</h1>
    <msg-exception ref="exception" />
    <table class="table">
      <thead class="table-header">
        <tr class="table-row">
          <th class="table-col xs-d-none"></th>
          <th class="table-col">Key</th>
          <th class="table-col"></th>
          <th class="table-col">Value</th>
          <th class="table-col"></th>
        </tr>
      </thead>
      <tbody class="table-body">
        <template v-for="(item, idx) in contactData">
          <tr class="table-row" v-if="item[0] !== 'id'" :key="idx">
            <td class="table-col col-center xs-d-none">{{ idx }}.</td>
            <td class="table-col">
              <input-text-with-cancel v-model="item[0]" @change="handlerChangeInput" placeholder="Название" :disabled="['id', 'name', 'phone']" />
            </td>
            <td class="table-col">:</td>
            <td class="table-col">
              <input-text-with-cancel v-model="item[1]" @change="handlerChangeInput" placeholder="Значение" />
            </td>
            <!-- Control Block -->
            <td class="table-col">
              <div class="icon-wrap icon-control">
                <icon-trash class="icon-delete" @click.native="handlerClickDeleteProperty(idx)" />
              </div>
            </td>
          </tr>
        </template>
        <!-- Add New Properties -->
        <tr class="table-row row-new-properties">
          <td class="table-col xs-d-none">
            <div class="icon-wrap icon-none">
              <icon-keyboard />
            </div>
          </td>
          <td class="table-col">
            <input-text-with-cancel v-model="newProperty.key" placeholder="Название" />
          </td>
          <td class="table-col">:</td>
          <td class="table-col">
            <input-text-with-cancel v-model="newProperty.value" placeholder="Значение" />
          </td>
          <!-- Control -->
          <td class="table-col">
            <div class="icon-wrap icon-control">
              <icon-node-plus width="22" height="22" @click.native="handlerClickAddProperty(newProperty)" />
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <!-- pass -->
      </tfoot>
    </table>
    <!-- Modal Window -->
    <div class="modal-window">
      <modal-warning ref="modal" />
    </div>
    <!-- Control Block -->
    <div class="button-control">
      <div v-if="historyChanges">
        <input v-if="!historyChanges.isBegin" type="button" value="Назад" class="button button-back" @click="handlerClickBack" />
        <input v-if="!historyChanges.isEnd" type="button" value="Вперед" class="button button-forward" @click="handlerClickForward" />
      </div>
      <input v-if="isEnabledCreateButton" class="button-create" type="button" value="Создать контакт" @click="handlerClickCreateContactData" />
      <input v-if="isEnabledEditButton" class="button-edit" type="button" value="Применить изменения" @click="handlerClickUpdateContactData" />
      <input v-if="isEnabledDeleteButton" class="button-delete" type="button" value="Удалить контакт" @click="handlerClickDeleteContactData" />
      <input class="button-cancel" type="button" value="Отмена" @click="handlerClickCancel" />
    </div>
  </div>
</template>

<script>
// Import JS
import { isString, isInteger, isArray } from "@/assets/js/utilities.js";
import HistoryChanges from "@/assets/js/HistoryChanges.js";
import APIJsonServer from "@/assets/js/APIJsonServer.js";

// Import Basic Components
import MsgException from "@/components/MsgException";
import ModalWarning from "@/components/modals/ModalWarning";
// Import Input Components
import InputTextWithCancel from "@/components/forms/inputs/InputTextWithCancel";
// Import Icon Components
import IconTrash from "@/components/icons/IconTrash";
import IconKeyboard from "@/components/icons/IconKeyboard";
import IconNodePlus from "@/components/icons/IconNodePlus";

export default {
  name: "ContactInfoPage",
  components: { MsgException, ModalWarning, InputTextWithCancel, IconTrash, IconKeyboard, IconNodePlus },
  props: {
    // Режим запуска страницы
    mode: { type: String },
    // Начальные данные контакта
    data: { type: Object },
  },
  data() {
    return {
      // Объект хранящий историю изменений контактной информации
      historyChanges: null,

      // Объект хранящий интерфейс для взаимодействия с сервером
      api: null,

      // Контактная информация
      contactData: [],

      // Объект хранящий название и значение новой контактной информации
      newProperty: {
        key: null,
        value: null,
      },
    };
  },
  mounted() {
    // Создаем объект хранилища изменений контактной информации
    this.historyChanges = new HistoryChanges(10);

    // Создаем интерфейс для взаимодействия с сервером
    this.api = new APIJsonServer(this.urlServer);

    // Преобразовываем входной объект контактных данных в массив
    this.contactData = Object.entries(this.data ?? {});

    // Сохраняем начальное состояние данных
    this.historyChanges.pushState(this.contactData);

    // Вызываем обработчик маршрута
    this.routerControl(this.$route);
  },

  watch: {
    // При изменении маршрута вызываем его обработчик
    $route: "routerControl",

    // contactData
    contactData: {
      handler() {
        // pass
      },
      deep: true,
    },

    "historyChanges.state"(value) {
      console.log(value);
    },
  },

  computed: {
    // Адрес сервера
    urlServer() {
      return this.$store.state.urlServer;
    },

    // Вычисляет должна ли кнопка Create отображаться, основываясь на входном параметре Mode
    isEnabledCreateButton() {
      return ["all", "create"].includes(this.mode);
    },

    // Вычисляет должна ли кнопка Edit отображаться, основываясь на входном параметре Mode
    isEnabledEditButton() {
      return ["all", "edit"].includes(this.mode);
    },

    // Вычисляет должна ли кнопка Delete отображаться, основываясь на входном параметре Mode
    isEnabledDeleteButton() {
      return ["all", "delete", "edit"].includes(this.mode);
    },
  },
  methods: {
    // Обрабатывает события Change на компоненте Input
    handlerChangeInput() {
      this.historyChanges.pushState(this.contactData);
    },

    // Обрабатывает события Click на кнопке Back
    handlerClickBack() {
      this.contactData = this.historyChanges.back();
    },

    // Обрабатывает события Click на кнопке Forward
    handlerClickForward() {
      this.contactData = this.historyChanges.forward();
    },

    // Обрабатывает маршрут учитывая состояние входных данных
    routerControl() {
      if (!this.validatorMode(this.mode) || !this.validatorContactData(this.contactData)) {
        this.redirectToContactListPage();
        return;
      }

      this.processingMode();
    },

    // Обрабатывает режим запуска страницы
    processingMode() {
      if (this.mode == "delete") {
        this.deleteContactData();
      }
    },

    // Обрабатывает события Click на кнопке Delete Property
    handlerClickDeleteProperty(idx) {
      this.deletePropertyFromContactData(idx);
    },

    // Обрабатывает события Click на кнопке Add Property
    handlerClickAddProperty(property) {
      this.addPropertyToContactData(property);
    },

    // Добавляет новое свойство в данные контакта
    addPropertyToContactData(property) {
      if (!this.validationKeyAndValueProperty(property)) {
        this.showModalWindow("Ошибка!", "Пожалуйста, введите название и значение данных");
        return;
      }

      if (this.contactData.every((arr) => arr[0] === property.key)) {
        this.showModalWindow("Ошибка!", `Измините, но "${property.key}" уже существует, либо её добавление запрещено!`);
        return;
      }

      this.contactData.push([property.key, property.value]);

      this.historyChanges.pushState(this.contactData);

      this.resetNewProperty();
    },

    // Удаляет по индексу свойство в данных контакта
    deletePropertyFromContactData(idx) {
      const key = this.contactData[idx][0];

      if (["id", "name", "phone"].includes(key)) {
        this.showModalWindow("Ошибка!", `Измините, но "${key}" удалить нельзя! Можно изменить только значение!`);
        return;
      }

      this.showModalWindow("Внимание!", "Вы действительно ходите удалить эти данные?").then((event) => {
        if (event === "ok") {
          this.$delete(this.contactData, idx);
        }
      });
    },

    // Запускает цепочку действий для удаления контакта на сервере
    deleteContactData() {
      this.showModalWindow("Внимание!", "Вы действительно ходите удалить данный контакт?").then((event) => {
        if (event === "ok") {
          this.sleep()
            .then(() => this.api.delete("/users", Object.fromEntries(this.contactData)))
            .then(() => {
              this.redirectToContactListPage();
            })
            .catch((ex) => {
              this.$refs.exception.show(ex.name, ex.message);
            });
        } else if (event === "cancel" && this.mode === "delete") {
          this.redirectToContactListPage();
        }
      });
    },

    // Запускает цепочку действий для создания контакта на сервере
    createContactData() {
      if (!this.validationAllProperties()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      this.sleep()
        .then(() => this.api.create("/users", Object.fromEntries(this.contactData)))
        .then(() => {
          this.redirectToContactListPage();
        })
        .catch((ex) => {
          this.$refs.exception.show(ex.name, ex.message);
        });
    },

    // Запускает цепочку действий для обновления контактной информации на сервере
    updateContactData() {
      /// необходима проверка наличия изменений для оптимизации
      if (!this.validationAllProperties()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      this.showModalWindow("Внимание!", "Вы действительно ходите изменить данные?").then((event) => {
        if (event === "ok") {
          this.sleep()
            .then(() => this.api.update("/users", Object.fromEntries(this.contactData)))
            .then(() => {
              this.redirectToContactListPage();
            })
            .catch((ex) => {
              this.$refs.exception.show(ex.name, ex.message);
            });
        }
      });
    },

    // Обрабатывает события Click на кнопке "Create contact data"
    handlerClickCreateContactData() {
      this.createContactData();
    },

    // Обрабатывает события Click на кнопке "Update contact data"
    handlerClickUpdateContactData() {
      this.updateContactData();
    },

    // Обрабатывает события Click на кнопке "Delete contact data"
    handlerClickDeleteContactData() {
      this.deleteContactData();
    },

    // Обрабатывает события Click на кнопке "Cancel"
    handlerClickCancel() {
      this.showModalWindow("Внимание!", "Вы действительно ходите выйти? Все изменения будут утеряны!").then((event) => {
        if (event === "ok") {
          this.redirectToContactListPage();
        }
      });
    },

    // Создает эмуляцию задержки взаимодействия с сервером
    sleep(ms = 0) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    // Выполняет валидацию режима запуска
    validatorMode(mode) {
      return ["all", "delete", "edit", "create"].includes(mode);
    },

    // Выполняет валидацию структуры данных контактной информации // !!! необходим RENAME
    validatorContactData(data) {
      return data && data.every((arr) => isArray(arr) && arr.length == 2 && arr.every((subel) => isString(subel) || isInteger(subel)));
    },

    // Выполняет валидацию всех свойств
    validationAllProperties() {
      return true; // !!!!!!!!!!!!!!!!!!!!!! Реализация
    },

    // Выполняет валидацию ключа и значения свойства
    validationKeyAndValueProperty(property) {
      return this.validation(/^[()-+,.а-яА-ЯёЁ\s\w]+$/, property.key) && this.validation(/^[()-+,.а-яА-ЯёЁ\s\w]+$/, property.value);
    },

    // Выполняет валидацию данных
    validation(regex, value) {
      if (!(regex instanceof RegExp)) {
        throw `(${this.$options.name}) input param Regex is not RegExp`;
      }

      return value && regex.test(value);
    },

    // Сбрасывает поля новой контактной информации
    resetNewProperty() {
      this.newProperty = {
        key: null,
        value: null,
      };
    },

    // Открывает модальное окно
    showModalWindow(title, message) {
      return this.$refs.modal.show(title, message);
    },

    // Перебрасывает на страницу списка контактов
    redirectToContactListPage() {
      this.$router.push({ name: "ContactList" });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.contact-info-page {
  & .input-text-with-cancel {
    // pass

    &__input {
      height: 32px;
    }
  }

  & .icon-delete {
    cursor: pointer;
    color: $color-exception;

    &:hover {
      color: red;
    }
  }

  & .icon-control {
    & .icon:hover {
      color: $color-header;
    }
  }

  & .button-control {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    & .button {
      max-width: 200px;
      margin: 5px;

      &:hover {
        background: lighten($color-text, 72);
      }
    }
  }
}
</style>