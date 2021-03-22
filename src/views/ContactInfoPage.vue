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
              <input-text-with-cancel :value="item[0]" @change="handlerChangeInput($event, idx, 0)" placeholder="Название" :disabled="blockedKey" />
            </td>
            <td class="table-col">:</td>
            <td class="table-col">
              <input-text-with-cancel v-model="item[1]" @change="handlerChangeInput" placeholder="Значение" />
            </td>
            <!-- Control Block -->
            <td class="table-col">
              <div class="icon-control icon-wrap">
                <icon-trash class="icon-delete" @click.native="handlerClickDeleteProperty(idx)" />
              </div>
            </td>
          </tr>
        </template>
        <!-- Add New Properties -->
        <tr class="table-row row-new-properties">
          <td class="table-col xs-d-none">
            <div class="icon-none icon-wrap">
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
            <div class="icon-control icon-wrap">
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

      // Названия значений, которые будут заблокированы от зменений
      blockedKey: ["id", "name", "phone"],

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

    contactData: {
      handler(newValue) {
        console.log("watch contactData", newValue);
      },
      deep: true,
    },
  },

  computed: {
    // Адрес сервера
    urlServer() {
      return this.$store.state.urlServer;
    },

    // Вычисляет должна ли кнопка Back отображаться, основываясь на состоянии historyChanges
    isEnabledBackButton() {
      return this.historyChanges && !this.historyChanges.isBegin;
    },

    // Вычисляет должна ли кнопка Forward отображаться, основываясь на состоянии historyChanges
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
    /**
     * Метод findContact вызывает переданную функцию callback один раз для каждого элемента контактной информации, 
     * присутствующего в массиве, до тех пор, пока она не вернёт true.
     * @param {Function} callback - функция, вызывающаяся для каждого элемента информации
     * @returns {Number} dозвращает индекс первого вхождения контактной информации, которая удовлетворила условию. Если нет, то -1.
     */
    findContact(callback) {
      return this.contactData.findIndex(callback);
    },

    /**
     * Обрабатывает события Click на кнопке Back
     * @returns void
     */
    handlerClickBack() {
      this.contactData = this.historyChanges.back();
    },

    /**
     * Обрабатывает события Click на кнопке Forward
     * @returns void
     */
    handlerClickForward() {
      this.contactData = this.historyChanges.forward();
    },

    /**
     * Обрабатывает маршрут учитывая состояние входных данных
     * @returns void
     */
    routerControl() {
      // Проверяем валидность входных данных компонента.
      if (!this.validationMode(this.mode) || !this.validationStructureContactData(this.contactData)) {
        this.redirectToContactListPage();
        return;
      }

      // Запускаем обработчик режим запуска страницы
      this.processingMode();
    },

    /**
     * Обрабатывает режим запуска страницы
     * @returns void
     */
    processingMode() {
      if (this.mode == "delete") {
        this.deleteContactData();
      }
    },

    /**
     * Обрабатывает события Click на кнопке Delete Property
     * @returns void
     */
    handlerClickDeleteProperty(idx) {
      this.deletePropertyFromContactData(idx);
    },

    /**
     * Обрабатывает события Click на кнопке Add Property
     * @param {object} property - элемент контактной информации
     * @returns void
     */
    handlerClickAddProperty(property) {
      this.addPropertyToContactData(property);
    },

    /**
     * Обрабатывает события Change на компоненте Input
     * @param {object} value - новойе значение
     * @param {object} idx_i - индекс элемента контактной информации, где произашло изменение
     * @param {object} idx_j - индекс субэлемента контактной информации, где произашло изменение
     * @returns void
     */
    handlerChangeInput(value, idx_i, idx_j) {
      // Если изменение произошло через v-model, то выходим фиксируя результат
      if (arguments.length === 1) {
        this.historyChanges.pushState(this.contactData);
        return;
      }

      // Иначе запускаем метод точечного изменения контактной информации
      this.changeItemToContactData(value, idx_i, idx_j);
    },

    /**
     * Точечно изменяет данные в контактной информации
     * @param {object} value - новойе значение
     * @param {object} idx_i - индекс элемента контактной информации, где произашло изменение
     * @param {object} idx_j - индекс субэлемента контактной информации, где произашло изменение
     * @returns void
     */
    changeItemToContactData(value, idx_i, idx_j) {
      // Выполняем проверку
      // Если это ключ свойства и оно уже существует или в списке заблокированных, то отменяем изменения и выходим
      if (idx_j === 0 && !this.keyPropertyValidator(value, idx_i)) {
        this.showModalWindow("Ошибка!", `Измините, но "${value}" уже существует, либо её добавление запрещено!`);
        this.$set(this.contactData[idx_i], idx_j, this.historyChanges.current[idx_i][idx_j]);
        return;
      }

      // Если изменяем данные, где новое значение отличается от текущего, то фиксируем это изменение, иначе изменение игнорируем
      if (this.contactData[idx_i][idx_j] !== value) {
        this.$set(this.contactData[idx_i], idx_j, value);
        this.historyChanges.pushState(this.contactData);
      }
    },
 
    /**
     * Добавляет новое свойство в данные контакта
     * @param {object} property - элемент контактной информации
     * @returns void
     */
    addPropertyToContactData(property) {
      // Проверяет являютя ли название и значение пустой стракой
      if (this.emptyStringValidator(property.key) || this.emptyStringValidator(property.value)) {
        this.showModalWindow("Ошибка!", "Название и значение данных не должны быть пустыми!");
        return;
      }

      // Проверяем название на уникальность и доступность
      if (!this.keyPropertyValidator(property.key)) {
        this.showModalWindow("Ошибка!", `Измините, но "${property.key}" уже существует, либо её добавление запрещено!`);
        return;
      }

      // Если валидно, то фиксируем результат
      this.contactData.push([property.key, property.value]);
      this.historyChanges.pushState(this.contactData);

      // Сбрасывает поля
      this.resetNewProperty();
    },

    /**
     * Удаляет по индексу контактную информацию
     * @param {object} idx - индекс элемента контактной информации, которую необходимо удалить
     * @returns void
     */
    deletePropertyFromContactData(idx) {
      const key = this.contactData[idx][0];

      // Проверяем заблокировано ли от изменений свойство
      if (this.blockedKey.includes(key)) {
        this.showModalWindow("Ошибка!", `Измините, но "${key}" удалить нельзя! Можно изменить только значение!`);
        return;
      }

      // Просим подтверждения у пользователя и удаляем заданное свойство по индексу
      this.showModalWindow("Внимание!", "Вы действительно ходите удалить эти данные?").then((event) => {
        if (event === "ok") {
          this.$delete(this.contactData, idx);
        }
      });
    },

    /**
     * Запускает цепочку действий для удаления контакта на сервере
     * @returns void
     */
    deleteContactData() {
      // Просим подтверждения у пользователя и отправляем запрос на удаление данных
      this.showModalWindow("Внимание!", "Вы действительно ходите удалить данный контакт?").then((event) => {
        if (event === "ok") {
          // Включаем визуальное представление загрузки
          this.statusLoad++;

          // Отправляем запрос на удаление данных
          this.sleep()
            .then(() => this.api.delete("/users", Object.fromEntries(this.contactData)))
            .then(() => {
              // Выполняем перебрас на страницу списка контактов в случаи успеха
              this.redirectToContactListPage();
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
          // Если страница открыта в режиме удаления, то при отмене выполняем перебрас на страницу списка контактов
        } else if (event === "cancel" && this.mode === "delete") {
          this.redirectToContactListPage();
        }
      });
    },
 
    /**
     * Запускает цепочку действий для создания контакта на сервере
     * @returns void
     */
    createContactData() {
      // Проверяем валидность данных перед отправкой на сервер
      if (!this.allPropertiesValidator()) {
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
          // Выводим сообщение об ошибке в случаи отказа
          this.$refs.exception.show(ex.name, ex.message);
          console.error(ex);
        })
        .finally(() => {
          // Отключаем визуальное представление загрузки
          this.statusLoad--;
        });
    },

    /**
     * Запускает цепочку действий для обновления контактной информации на сервере
     * @returns void
     */
    updateContactData() {
      // Проверяем были ли какие-то изменения, нет - redirect
      if (this.historyChanges && !this.historyChanges.isEmpty && !this.historyChanges.index) {
        this.redirectToContactListPage();
      }

      // Проверяем валидность данных перед отправкой на сервер
      if (!this.allPropertiesValidator()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      // Просим подтверждения у пользователя и отправляем запрос на обновление данных
      this.showModalWindow("Внимание!", "Вы действительно ходите изменить данные?").then((event) => {
        if (event === "ok") {
          // Включаем визуальное представление загрузки
          this.statusLoad++;

          // Отправляем запрос на обновление данных
          this.sleep()
            .then(() => this.api.update("/users", Object.fromEntries(this.contactData)))
            .then(() => {
              // Выполняем перебрас на страницу списка контактов в случаи успеха
              this.redirectToContactListPage();
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
        }
      });
    },

    /**
     * Обрабатывает события Click на кнопке "Create contact data"
     * @returns void
     */
    handlerClickCreateContactData() {
      this.createContactData();
    },

    /**
     * Обрабатывает события Click на кнопке "Update contact data"
     * @returns void
     */
    handlerClickUpdateContactData() {
      this.updateContactData();
    },

    /**
     * Обрабатывает события Click на кнопке "Delete contact data"
     * @returns void
     */
    handlerClickDeleteContactData() {
      this.deleteContactData();
    },

    /**
     * Обрабатывает события Click на кнопке "Cancel"
     * @returns void
     */
    handlerClickCancel() {
      // Просим подтверждения у пользователя и выполняем перебрас на страницу списка контактов
      this.showModalWindow("Внимание!", "Вы действительно ходите выйти? Все изменения будут утеряны!").then((event) => {
        if (event === "ok") {
          this.redirectToContactListPage();
        }
      });
    },

    /**
     * Создает эмуляцию задержки взаимодействия с сервером
     * @param {Number} ms - задержка
     * @returns {Promise} new Promise
     */
    sleep(ms = 1000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    /**
     * Выполняет валидацию режима запуска
     * @param {String} mode - режим запуска
     * @returns {Boolean} возвращает логическое значение, указывающее, доступен ли данный режим запуска
     */
    validationMode(mode) {
      return ["all", "delete", "edit", "create"].includes(mode);
    },
 
    /**
     * Выполняет валидацию структуры данных контактной информации на принадлежность вида [['...', '...'], ['...', 1]]
     * @param {Array} data - контактная информация
     * @returns {Boolean} - возвращает логическое значение, указывающее, соответствует ли контактная информация заданной структуре 
     */
    validationStructureContactData(data) {
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
              (subel) => isString(subel) || isInteger(subel) // должны быть либо строкой, либо целым числом
            )
        )
      );
    },

    /**
     * Выполняет общую валидацию всех свойств
     * @returns {Boolean} - валидность всех свойств контактной информации
     * @throws Выдает ошибку, если структура контактной информации нарушена
     */
    allPropertiesValidator() {
      // Проверяем структуру данных контактной информации
      if (!this.validationStructureContactData(this.contactData)) {
        throw "Error. Структура данных нарушена.";
      }

      // Создаем стрелочную функцию для удобства валидации на пустую строку
      const valid = (str) => this.emptyStringValidator(str);

      // Выполняем базовую проверку на пустую строку и отдаем результат
      return !~this.findContact((prop) => valid(prop[0]) || valid(prop[1]));
    },

    /**
     * Проверяет является ли строка пустой
     * @param {String} str - строка
     * @returns {Boolean} возвращает логическое значение, указывающее, существует входной параметр пустой строке.
     */
    emptyStringValidator(str) {
      return /^[\s]*$/.test(str ?? "");
    },

    /**
     * Выполняет полную валидацию ключа на уникальность и доступность в контактной информации
     * @param {String} keyProperty - значение ключа
     * @param {String} [indexKeyProperty=-1] - индекс значение ключа в контактной информации. -1 - если его нет.
     * @returns {Boolean} возвращает логическое значение, указывающее, уникальность и доступность заданного значения.
     */
    keyPropertyValidator(keyProperty, indexKeyProperty = -1) {
      const isCurrentProperty = (idx) => idx === indexKeyProperty;

      return !~this.findContact((item, idx) => !isCurrentProperty(idx) && !this.blockedKeyValidator(keyProperty, item[0]));
    },

    /**
     * Выполняет точечную валидацию на доступность
     * @param {String} keyProperty - значение ключа
     * @param {String} [keyItem] - значение ключа другого элемента.
     * @returns {Boolean} возвращает логическое значение, указывающее, доступность заданного значения.
     */
    blockedKeyValidator(keyProperty, keyItem) {
      return !this.blockedKey.includes(keyProperty) && keyProperty !== keyItem;
    },

    /**
     * Сбрасывает поля для добавления новой контактной информации
     * @returns void
     */
    resetNewProperty() {
      this.newProperty = {
        key: null,
        value: null,
      };
    },

    /**
     * Открывает модальное окно
     * @param {String} title - заголовок
     * @param {String} message - тело сообщения
     * @returns {Promise} new Promise
     */
    showModalWindow(title, message) {
      return this.$refs.modal.show(title, message);
    },

    /**
     * Перебрасывает на страницу списка контактов
     * @returns void
     */
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