<template>
  <div class="contact-info-page">
    <h1 class="page-title xs-text-base">Контактная информация</h1>
    <msg-exception ref="exception" />
    <loader v-if="statusLoad" />
    <table v-else class="table">
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
    <!-- Control Block -->
    <div v-show="!statusLoad" class="button-control">
      <div class="control-history">
        <input v-show="isEnabledBackButton" class="button button-back" type="button" value="Назад" @click="handlerClickBack" />
        <input v-show="isEnabledForwardButton" class="button button-forward" type="button" value="Вперед" @click="handlerClickForward" />
      </div>
      <input v-show="isEnabledCreateButton" class="button button-create" type="button" value="Создать контакт" @click="handlerClickCreateContactData" />
      <input v-show="isEnabledEditButton" class="button button-update" type="button" value="Применить изменения" @click="handlerClickUpdateContactData" />
      <input v-show="isEnabledDeleteButton" class="button button-delete" type="button" value="Удалить контакт" @click="handlerClickDeleteContactData" />
      <input class="button button-cancel" type="button" value="Отмена" @click="handlerClickCancel" />
    </div>
    <!-- Modal Window -->
    <div class="modal-window">
      <modal-warning ref="modal" />
    </div>
  </div>
</template>

<script>
// Import JS
import { isString, isInteger, isArray } from "@/assets/js/utilities.js";
import HistoryChanges from "@/assets/js/HistoryChanges.js";
import APIJsonServer from "@/assets/js/APIJsonServer.js";
// Import Basic Components
import Loader from "@/components/Loader";
import MsgException from "@/components/MsgException";
import ModalWarning from "@/components/modals/ModalWarning";
// Import Input Components
import InputTextWithCancel from "@/components/InputTextWithCancel";
// Import Icon Components
import IconTrash from "@/components/icons/IconTrash";
import IconKeyboard from "@/components/icons/IconKeyboard";
import IconNodePlus from "@/components/icons/IconNodePlus";

export default {
  name: "ContactInfoPage",
  components: { Loader, MsgException, ModalWarning, InputTextWithCancel, IconTrash, IconKeyboard, IconNodePlus },
  props: {
    // Режим запуска страницы
    mode: { type: String },
    // Начальные данные контакта
    data: { type: Object },
  },
  data() {
    return {
      // Состояние загрузки данных
      statusLoad: null,

      // Объект хранилище истории изменений контактной информации
      historyChanges: null,

      // Объект интерфейс для взаимодействия с сервером
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
  },

  computed: {
    // Адрес сервера
    urlServer() {
      return this.$store.state.urlServer;
    },

    isEnabledBackButton() {
      return this.historyChanges && !this.historyChanges.isBegin;
    },

    isEnabledForwardButton() {
      return this.historyChanges && !this.historyChanges.isEnd;
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
      if (!this.validatorMode(this.mode) || !this.validatinStructureContactData(this.contactData)) {
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
      if (this.emptyStringValidator(property.key) || this.emptyStringValidator(property.value)) {
        this.showModalWindow("Ошибка!", "Название и значение данных не должны быть пустыми!");
        return;
      }

      if (~this.contactData.findIndex((arr) => arr[0] === property.key)) {
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
      // Просим подтверждения у пользователя и отправляем запрос на удаление данных
      this.showModalWindow("Внимание!", "Вы действительно ходите удалить данный контакт?").then((event) => {
        if (event === "ok") {
          // Включаем визуальное представление загрузки
          this.statusLoad++;

          this.sleep()
            .then(() => this.api.delete("/users", Object.fromEntries(this.contactData)))
            .then(() => {
              // Выполняем перебрас на страницу списка контактов в случаи успеха
              this.redirectToContactListPage();
            })
            .catch((ex) => {
              // Выводим сообщение об ошибке
              this.$refs.exception.show(ex.name, ex.message);
            })
            .finally(() => {
              // Отключаем визуальное представление загрузки
              this.statusLoad--;
            });
          // Если страница открыта в режиме удаления, то при отмене выполняем перебрас на страницу списка контактов
        } else if (event === "cancel" && this.mode === "delete") {
          this.redirectToContactListPage();
        }
      });
    },

    // Запускает цепочку действий для создания контакта на сервере
    createContactData() {
      // Проверяем валидность данных перед отправкой на сервер
      if (!this.validationAllProperties()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      // Включаем визуальное представление загрузки
      this.statusLoad++;

      // Отправляем запрос на создание данных
      this.sleep()
        .then(() => this.api.create("/users", Object.fromEntries(this.contactData)))
        .then(() => {
          // Выполняем перебрас на страницу списка контактов в случаи успеха
          this.redirectToContactListPage();
        })
        .catch((ex) => {
          // Выводим сообщение об ошибке
          this.$refs.exception.show(ex.name, ex.message);
        })
        .finally(() => {
          // Отключаем визуальное представление загрузки
          this.statusLoad--;
        });
    },

    // Запускает цепочку действий для обновления контактной информации на сервере
    updateContactData() {
      // Проверяем были ли какие-то изменения, нет - redirect
      if (this.historyChanges && !this.historyChanges.isEmpty && !this.historyChanges.index) {
        this.redirectToContactListPage();
      }

      // Проверяем валидность данных перед отправкой на сервер
      if (!this.validationAllProperties()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      // Просим подтверждения у пользователя и отправляем запрос на обновление данных
      this.showModalWindow("Внимание!", "Вы действительно ходите изменить данные?").then((event) => {
        if (event === "ok") {
          // Включаем визуальное представление загрузки
          this.statusLoad++;

          this.sleep()
            .then(() => this.api.update("/users", Object.fromEntries(this.contactData)))
            .then(() => {
              // Выполняем перебрас на страницу списка контактов в случаи успеха
              this.redirectToContactListPage();
            })
            .catch((ex) => {
              // Выводим сообщение об ошибке
              this.$refs.exception.show(ex.name, ex.message);
            })
            .finally(() => {
              // Отключаем визуальное представление загрузки
              this.statusLoad--;
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
      // Просим подтверждения у пользователя и выполняем перебрас на страницу списка контактов
      this.showModalWindow("Внимание!", "Вы действительно ходите выйти? Все изменения будут утеряны!").then((event) => {
        if (event === "ok") {
          this.redirectToContactListPage();
        }
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

    // Выполняет валидацию режима запуска
    validatorMode(mode) {
      return ["all", "delete", "edit", "create"].includes(mode);
    },

    // Выполняет валидацию структуры данных контактной информации
    validatinStructureContactData(data) {
      // Проверяем структуру данных на принадлежность вида [['...', '...'], ['...', 1]]
      return (
        isArray(data) && // объект должен быть массивом
        data.length && // массив должен быть не пустым
        data.every(
          // все элементы
          (arr) =>
            isArray(arr) && // должены быть массивами
            arr.length == 2 && // массивы должены иметь длину 2 элемента
            arr.every(
              // все субэелементы
              (subel) => isString(subel) || isInteger(subel) // должны быть либо строкой, либо целы числом
            )
        )
      );
    },

    // Выполняет валидацию всех свойств
    validationAllProperties() {
      if (!this.validatinStructureContactData(this.contactData)) {
        throw "Error. Структура данных нарушена.";
      }

      // Создаем стрелочную функцию для удобства
      const esv = (str) => this.emptyStringValidator(str);

      // Выполняем базовую проверку на пустую строку и одаем результат
      return !~this.contactData.findIndex((prop) => esv(prop[0]) || esv(prop[1]));
    },

    // Проверяет является ли строка пустой
    emptyStringValidator(str) {
      return /^[\s]*$/.test(str ?? "");
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
  & input {
    height: 32px;
  }

  & .table {
    & .table-col {
      height: 45px;
      min-height: 45px;
    }
  }

  & .button-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input {
      max-width: 200px;
      margin: 5px;

      &:hover {
        background: lighten($color-text, 72);
      }
    }
  }

  & .control-history {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>