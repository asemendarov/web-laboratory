<template>
  <div class="contact-info-page">
    <h1 class="page-title xs-text-base">Контактная информация</h1>
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
          <tr v-if="item[0] !== 'id'" :key="idx">
            <td class="table-col col-center xs-d-none">{{ idx }}.</td>
            <td class="table-col">
              <input type="text" :value="item[0]" />
            </td>
            <td class="table-col">:</td>
            <td class="table-col">
              <input type="text" :value="item[1]" />
            </td>
            <!-- Control -->
            <td class="table-col">
              <div class="icon-wrap icon-control">
                <icon-trash class="icon-delete" @click.native="handlerDeleteProperty(idx)" />
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
            <input type="text" v-model="newProperty.key" placeholder="Название" />
          </td>
          <td class="table-col">:</td>
          <td class="table-col">
            <input type="text" v-model="newProperty.value" placeholder="Значение" />
          </td>
          <!-- Control -->
          <td class="table-col">
            <div class="icon-wrap icon-control">
              <icon-node-plus width="22" height="22" @click.native="handlerAddProperty" />
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
    <!-- Control -->
    <div class="button-control">
      <input v-if="isEnabledCreateButton" class="button button-create" type="button" value="Создать контакт" @click="handlerCreateButton" />
      <input v-if="isEnabledEditButton" class="button button-edit" type="button" value="Применить изменения" @click="handlerEditButton" />
      <input v-if="isEnabledDeleteButton" class="button button-delete" type="button" value="Удалить контакт" @click="handlerDeleteButton" />
      <input class="button button-cancel" type="button" value="Отмена" @click="handlerCancelButton" />
    </div>
  </div>
</template>

<script>
import { isObject, isString, isInteger, isArray } from "@/assets/js/utilities.js";

import IconTrash from "@/components/icons/IconTrash";
import IconKeyboard from "@/components/icons/IconKeyboard";
import IconNodePlus from "@/components/icons/IconNodePlus";
import ModalWarning from "@/components/modals/ModalWarning";

export default {
  name: "ContactInfoPage",
  components: { IconTrash, IconKeyboard, IconNodePlus, ModalWarning },
  props: {
    mode: {
      type: String,
      default: "all",
      validator(value) {
        console.log(value);
        return ["all", "delete", "edit", "create"].includes(value);
      },
    },
    contactData: {
      type: Array,
      default: () => [],
      validator(value) {
        console.log(value);
        return value.length && value.every((arr) => isArray(arr) && arr.length == 2 && arr.every((subel) => isString(subel) || isInteger(subel)));
      },
    },
  },
  data() {
    return {
      newProperty: {
        key: null,
        value: null,
      },
    };
  },
  watch: {
    // Обрабатываем маршрут
    $route: "routerControl",
  },
  mounted() {
    // Восстанавливаем реактивность входных данных намеренно игнорируя предупреждение Vue
    this.contactData = [...this.contactData];

    // Обрабатываем маршрут
    this.routerControl(this.$route);
  },

  computed: {
    url() {
      return `${this.$store.state.urlServer}/users`;
    },

    isEnabledCreateButton() {
      return ["all", "create"].includes(this.mode);
    },

    isEnabledEditButton() {
      return ["all", "edit"].includes(this.mode);
    },

    isEnabledDeleteButton() {
      return ["all", "delete", "edit"].includes(this.mode);
    },
  },
  methods: {
    routerControl() {
      if (!this.validatorMode() || !this.validatorContactData()) {
        this.redirectToContactListPage();
      }

      this.processingMode();
    },

    processingMode() {
      if (this.mode == "delete") {
        console.log("processingMode", "delete");
        this.deleteContactData();
      } else if (this.mode == "edit") {
        console.log("processingMode", "edit");
      } else {
        // create mode
        console.log("processingMode", "create");
      }
    },

    handlerDeleteProperty(idx) {
      console.log("handlerDeleteProperty", this.contactData[idx]);

      this.deletePropertyFromContactData(idx);
    },

    handlerAddProperty() {
      this.addPropertyToContactData(this.newProperty);
    },

    // Добавляет новое свойство в данные контакта
    addPropertyToContactData(property) {
      if (!this.validationProperty(property)) {
        this.showModalWindow("Ошибка!", "Пожалуйста, введите название и значение данных");
        return;
      }

      if (this.contactData.every((arr) => arr[0] === property.key)) {
        this.showModalWindow("Ошибка!", `Измините, но "${property.key}" уже существует, либо её добавление запрещено!`);
        return;
      }

      this.contactData.push([property.key, property.value]);
      // this.$set(this.contactData, this.contactData.length, [property.key, property.value]);

      this.resetNewProperty();
    },

    deletePropertyFromContactData(idx) {
      const key = this.contactData[idx][0];

      if (["id", "name", "phone"].includes(key)) {
        this.showModalWindow("Ошибка!", `Измините, но "${key}" удалить нельзя! Можно изменить только значение!`);
        return;
      }

      console.log("deletePropertyFromContactData1", this.contactData);

      this.showModalWindow("Внимание!", "Вы действительно ходите удалить эти данные?").then((event) => {
        if (event === "ok") {
          // this.contactData.splice(idx, 1);
          this.$delete(this.contactData, idx);
          console.log("deletePropertyFromContactData3", this.contactData);
        }
      });

      console.log("deletePropertyFromContactData2", this.contactData);
    },

    deleteContactData() {
      this.showModalWindow("Внимание!", "Вы действительно ходите удалить данный контакт?").then((event) => {
        if (event === "ok") {
          this.deletingResourceOnServer(Object.fromEntries(this.contactData)).then(() => {
            this.redirectToContactListPage();
          });
        }
      });
    },

    createContactData() {
      if (!this.validationAllProperties()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      this.creatingResourceOnServer(Object.fromEntries(this.contactData)).then(() => {
        this.redirectToContactListPage();
      });
    },

    editContactData() {
      /// необходима проверка наличия изменений для оптимизации
      if (!this.validationAllProperties()) {
        this.showModalWindow("Ошибка!", "Пожалуйста, убедитесь, что вы ввели данные правильно!");
        return;
      }

      this.showModalWindow("Внимание!", "Вы действительно ходите изменить данные?").then((event) => {
        if (event === "ok") {
          this.updatingResourceOnServer(Object.fromEntries(this.contactData)).then(() => {
            this.redirectToContactListPage();
          });
        }
      });
    },

    handlerCreateButton() {
      this.createContactData();
    },

    handlerEditButton() {
      this.editContactData();
    },

    handlerDeleteButton() {
      this.deleteContactData();
    },

    // Обработчик нажатия "Отмена"
    handlerCancelButton() {
      this.showModalWindow("Внимание!", "Вы действительно ходите выйти? Все изменения будут утеряны!").then((event) => {
        if (event === "ok") {
          this.redirectToContactListPage();
        }
      });
    },

    // Создает данные на сервере
    async creatingResourceOnServer(data) {
      if (!isObject(data)) {
        throw "(ContactInfoPage) data is not [object Object]";
      }

      delete data.id;

      const response = await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const json = await response.json();

      console.log("creatingResource", json);
    },

    // Обновляет данные на сервере
    async updatingResourceOnServer(data) {
      if (!isObject(data)) {
        throw "(ContactInfoPage) data is not [object Object]";
      }

      if (!data.id || !/^[1-9]\d*$/.test(data.id)) {
        throw "updatingResource >> некоректный ID";
      }

      const response = await fetch(`${this.url}/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const json = await response.json();

      console.log("updatingResource", json);
    },

    // Удаляет данные на сервере
    async deletingResourceOnServer(data) {
      if (!isObject(data)) {
        throw "(ContactInfoPage) data is not [object Object]";
      }

      if (!data.id || !/^[1-9]\d*$/.test(data.id)) {
        throw "deletingResource >> некоректный ID";
      }

      const response = await fetch(`${this.url}/${data.id}`, {
        method: "DELETE",
      });

      console.log("deletingResource", response.status);
    },

    async sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    validatorMode() {
      console.log("validatorMode", this.mode);
      return ["all", "delete", "edit", "create"].includes(this.mode);
    },

    validatorContactData() {
      console.log("validatorContactData", this.contactData);
      return this.contactData.length && this.contactData.every((arr) => isArray(arr) && arr.length == 2 && arr.every((subel) => isString(subel) || isInteger(subel)));
    },

    redirectToContactListPage() {
      this.$router.push({ name: "ContactList" });
    },

    // Валидация всех свойств
    validationAllProperties() {
      return true; // !!!!!!!!!!!!!!!!!!!!!! Реализация
    },

    // Валидация ключа и значения свойства
    validationProperty(property) {
      return this.validationKeyProperty(property.key) && this.validationValueProperty(property.value);
    },

    // Валидаця ключа свойства объекта
    validationKeyProperty(key) {
      return key && /^[()-+,.а-яА-ЯёЁ\s\w]+$/.test(key);
    },

    // Валидаця значения свойства объекта
    validationValueProperty(value) {
      return value && /^[()-+,.а-яА-ЯёЁ\s\w]+$/.test(value);
    },

    showModalWindow(title, message) {
      return this.$refs.modal.show(title, message);
    },

    resetNewProperty() {
      this.newProperty = {
        key: null,
        value: null,
      };
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.contact-info-page {
  & input {
    width: 95%;
    height: 32px;

    background: initial;

    cursor: pointer;

    border-bottom: 1px solid lighten($color-text, 65);

    &:focus {
      border-bottom-color: lighten($color-text, 20);
      cursor: text;
    }
  }

  & .icon-wrap {
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .icon {
      padding: 4px;
    }
  }

  & .icon-control {
    & .icon:hover {
      color: $color-header;
    }

    & .icon-delete {
      color: $color-exception;

      &:hover {
        color: red;
      }
    }
  }

  & .button-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .button {
      max-width: 200px;

      &:hover {
        background: lighten($color-text, 72);
      }
    }
  }
}
</style>