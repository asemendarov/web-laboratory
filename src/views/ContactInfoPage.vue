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
        <tr class="table-row" v-for="(value, key, idx) in contactData" :key="key">
          <template v-if="key !== 'id'">
            <td class="table-col col-center xs-d-none">{{ idx }}.</td>
            <td class="table-col">
              <input type="text" :name="`key-${key}`" :id="`key-${key}`" :value="key" />
            </td>
            <td class="table-col">:</td>
            <td class="table-col">
              <input type="text" :name="key" :id="key" :value="value" />
            </td>
            <!-- Control -->
            <td class="table-col">
              <div class="icon-wrap icon-control">
                <icon-trash class="icon-delete" @click.native="deleteData" />
              </div>
            </td>
          </template>
        </tr>
        <!-- Add New Properties -->
        <tr class="table-row row-new-properties">
          <td class="table-col xs-d-none">
            <div class="icon-wrap icon-none">
              <icon-keyboard />
            </div>
          </td>
          <td class="table-col">
            <input type="text" name="newKey" id="newKey" placeholder="Ключ" />
          </td>
          <td class="table-col">:</td>
          <td class="table-col">
            <input type="text" name="newValue" id="newValue" placeholder="Значение" />
          </td>
          <!-- Control -->
          <td class="table-col">
            <div class="icon-wrap icon-control" @dblclick.stop>
              <icon-node-plus width="22" height="22" @click.native="handlerAddProperties" />
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <!-- pass -->
      </tfoot>
    </table>
    <!-- Control -->
    <div class="button-control">
      <input v-if="isEnabledAddButton" class="button button-add" type="button" value="Создать контакт" @click="handlerAddButton" />
      <input v-if="isEnabledEditButton" class="button button-edit" type="button" value="Изменить контакт" @click="handlerEditButton" />
      <input v-if="isEnabledDeleteButton" class="button button-delete" type="button" value="Удалить контакт" @click="handlerDeleteButton" />
      <input class="button button-cancel" type="button" value="Отмена" @click="handlerCancelButton" />
    </div>
  </div>
</template>

<script>
import IconTrash from "@/components/icons/IconTrash";
import IconKeyboard from "@/components/icons/IconKeyboard";
import IconNodePlus from "../components/icons/IconNodePlus.vue";

export default {
  name: "ContactInfoPage",
  components: { IconTrash, IconKeyboard, IconNodePlus },
  props: {
    mode: {
      type: String,
      validator(value) {
        return ~["all", "delete", "edit", "add"].indexOf(value);
      },
    },
    contactData: {
      type: Object,
      validator(value) {
        return Object.prototype.toString.call(value) === "[object Object]";
      },
    },
  },
  data() {
    return {
      //pass
    };
  },
  watch: {
    $route: "routerControl",
  },
  mounted() {
    this.routerControl(this.$route);
  },
  computed: {
    url() {
      return `${this.$store.state.urlServer}/users`;
    },

    isEnabledAddButton() {
      return this.mode === "all" || this.mode === "add";
    },

    isEnabledEditButton() {
      return this.mode === "all" || this.mode === "edit";
    },

    isEnabledDeleteButton() {
      return this.mode === "all" || this.mode === "delete";
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
      } else if (this.mode == "edit") {
        console.log("processingMode", "edit");
      } else {
        // add mode
        console.log("processingMode", "add");
      }
    },

    deleteData() {
      console.log("deleteData");
    },

    handlerAddButton() {
      console.log("handlerAddButton");
    },

    handlerEditButton() {
      console.log("handlerEditButton");
    },

    handlerDeleteButton() {
      console.log("handlerDeleteButton");
    },

    // Обработчик нажатия "Отмена"
    handlerCancelButton() {
      this.redirectToContactListPage();
    },

    // Создает данные на сервере
    async creatingResourceOnServer(data) {
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
      if (!/^[1-9]\d*$/.test(data.id)) {
        throw "updatingResource >> некоректный ID";
      }

      const response = await fetch(this.url, {
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
      if (!/^[1-9]\d*$/.test(data.id)) {
        throw "deletingResource >> некоректный ID";
      }

      const result = fetch(`${this.url}/${data.id}`, {
        method: "DELETE",
      });
      console.log("deletingResource", result);
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
      return ~["all", "delete", "edit", "add"].indexOf(this.mode);
    },

    validatorContactData() {
      console.log("validatorContactData", this.contactData);
      return Object.prototype.toString.call(this.contactData) === "[object Object]";
    },

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