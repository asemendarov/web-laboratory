<template>
  <div class="contact-list-page">
    <h1 class="page-title xs-text-base">Список контактов</h1>
    <loader v-if="statusLoad > 0" />
    <msg-exception v-else-if="statusLoad < 0" msg="Error: Ошибка при подключении к серверу!" />
    <div v-else class="contact-list">
      <table class="table">
        <thead class="table-header">
          <tr class="table-row">
            <th class="table-col xs-d-none">ID</th>
            <th class="table-col">Name</th>
            <th class="table-col">Phone</th>
            <th>
              <!-- pass -->
            </th>
          </tr>
        </thead>
        <tbody class="table-body">
          <!-- Contact List -->
          <tr class="table-row" v-for="(contactData, idx) in contactDataList" :key="idx" @dblclick="showContact(contactData, $event)">
            <td class="table-col col-center xs-d-none">#{{ contactData.id || "?" }}</td>
            <td class="table-col">{{ contactData.name || "Пусто" }}</td>
            <td class="table-col">{{ contactData.phone || "Пусто" }}</td>
            <!-- Control -->
            <td class="table-col">
              <div v-if="contactData.id && contactData.name && contactData.phone" class="icon-wrap icon-control" @dblclick.stop>
                <icon-pencil-square @click.native="showEditContact(contactData)" />
                <icon-person-dash-fill @click.native="showDeleteContact(contactData)" />
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
              <input type="text" name="newName" id="newName" v-model="newContact.name" placeholder="Имя" :pattern="patternName" />
            </td>
            <td class="table-col">
              <input type="text" name="newPhone" id="newPhone" v-model="newContact.phone" placeholder="Телефон" :pattern="patternPhone" />
            </td>
            <!-- Control -->
            <td class="table-col">
              <div class="icon-wrap icon-control" @dblclick.stop>
                <icon-person-plus-fill @click.native="handlerCreateContact" />
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

import IconPencilSquare from "@/components/icons/IconPencilSquare";
import IconPersonDashFill from "@/components/icons/IconPersonDashFill";
import IconPersonPlusFill from "@/components/icons/IconPersonPlusFill";
import IconKeyboard from "@/components/icons/IconKeyboard";

export default {
  components: { Loader, MsgException, ModalWarning, IconPencilSquare, IconPersonDashFill, IconPersonPlusFill, IconKeyboard },
  name: "ContactListPage",
  data() {
    return {
      statusLoad: 0,
      contactDataList: [],

      newContact: {
        name: null,
        phone: null,
      },

      regexForName: /^[()-+,.а-яА-ЯёЁ\s\w]+$/,
      regexForPhone: /^[()-+,.а-яА-ЯёЁ\s\w]+$/,
    };
  },
  computed: {
    patternName() {
      return this.regexForName.toString().slice(1, -1);
    },
    patternPhone() {
      return this.regexForPhone.toString().slice(1, -1);
    },
  },
  mounted() {
    this.routerControl(this.$route);
  },
  watch: {
    $route: "routerControl",
  },
  methods: {
    routerControl() {
      this.loadData();
    },

    loadData() {
      this.statusLoad++;

      this.fetchContactList()
        .then((data) => {
          data.forEach((el) => {
            this.contactDataList.push(el);
          });
          this.statusLoad--;
        })
        .catch((e) => {
          this.statusLoad = -1;
          console.error(e);
        });
    },

    async fetchContactList() {
      await this.sleep(0);

      const response = await fetch(`${this.$store.state.urlServer}/users`);
      const data = await response.json();

      return data;
    },

    async sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },

    showContact(contactData, event) {
      this.showEditContact(contactData, event);
    },

    showCreateContact(contactData) {
      console.log("showCreateContact", contactData);
      this.redirectToContactInfoPage("create", contactData);
    },

    showEditContact(contactData) {
      console.log("showEditContact", contactData);
      this.redirectToContactInfoPage("edit", contactData);
    },

    showDeleteContact(contactData) {
      console.log("showDeleteContact", contactData);
      this.redirectToContactInfoPage("delete", contactData);
    },

    handlerCreateContact() {
      if (!this.validationContact(this.newContact)) {
        this.showModalWindow("Ошибка!", "Пожалуйста, введите корректное имя и номер нового контакта");
        return;
      }

      // Проверки на уникальность отсутствует намеренно.
      // В этом есть смысл.

      this.showCreateContact(this.newContact);
    },

    validationContact(contactData) {
      return this.validationNameContact(contactData.name) && this.validationPhoneContact(contactData.phone);
    },

    validationNameContact(name) {
      console.log("validationNameContact", name);
      return name && this.regexForName.test(name);
    },

    validationPhoneContact(phone) {
      console.log("validationPhoneContact", phone);
      return phone && this.regexForPhone.test(phone);
    },

    showModalWindow(title, message) {
      return this.$refs.modal.show(title, message);
    },

    redirectToContactInfoPage(mode, contactData) {
      this.$router.push({ name: "ContactInfo", params: { mode, contactData } });
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

    & .table-body {
      & .table-row {
        &:hover {
          outline: 1px solid lighten($color-text, 40);
        }

        &:active {
          outline-color: lighten($color-text, 20);
        }
      }
    }

    & input {
      padding: 0;

      width: 80%;
      height: 32px;

      background: initial;

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

      & .icon {
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