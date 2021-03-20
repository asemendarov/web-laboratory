<template>
  <div class="contact-list">
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
            <div v-show="contactData.id" class="icon-wrap icon-control">
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
            <input-text-with-cancel v-model="newContact.name" placeholder="Имя" />
          </td>
          <td class="table-col">
            <input-text-with-cancel v-model="newContact.phone" placeholder="Телефон" />
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
</template>

<script>
// Import Input Components
import InputTextWithCancel from "@/components/InputTextWithCancel";

export default {
  name: "ContactList",
  components: { InputTextWithCancel },
  props: {
    // Список контактов
    data: { type: Object },
  },
  data() {
    return {
      // Объект хранящий имя и телефон нового контакта
      newContact: {
        name: null,
        phone: null,
      },
    };
  },
  computed: {
    contactDataList() {
      return this.data;
    },
  },
  methods: {
    // Обрабатывает события Click на кнопке Edit Contact
    handlerClickEditContact(contactData) {
      this.$emit("click", "edit", contactData);
      // this.showEditContact(contactData);
    },

    // Обрабатывает события Click на кнопке Delete Contact
    handlerClickDeleteContact(contactData) {
      this.$emit("click", "delete", contactData);
      // this.showDeleteContact(contactData);
    },

    // Обрабатывает события Click на кнопке Create Contact
    handlerClickCreateContact(contactData) {
      this.$emit("click", "create", contactData);
      // this.showCreateContact(contactData);
    },

    // Сбрасывает поля нового контакта
    resetNewContact() {
      this.newContact = {
        name: null,
        phone: null,
      };
    },
  },
};
</script>

<style lang="">
/* pass */
</style>