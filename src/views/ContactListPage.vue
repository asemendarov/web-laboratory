<template>
  <div class="contact-list-page">
    <h1>Список контактов</h1>
    <loader v-if="statusLoad > 0" />
    <msg-exception v-else-if="statusLoad < 0" msg="Error: Ошибка при подключении к серверу!" />
    <div v-else class="contact-list">
      <table class="table">
        <thead class="table-header">
          <tr class="table-row">
            <th class="table-col">ID</th>
            <th class="table-col">Name</th>
            <th class="table-col">Phone</th>
            <th>
              <!-- pass -->
            </th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr class="table-row" v-for="(contact, idx) in contacts" :key="idx" @dblclick="showContact(contact, $event)">
            <td class="table-col">#{{ contact.id }}</td>
            <td class="table-col">{{ contact.name }}</td>
            <td class="table-col">{{ contact.phone || "Пусто" }}</td>
            <td class="table-col">
              <div class="icon-wrap" @dblclick.stop>
                <icon-pencil-square @click.native="showEditContact(contact)" />
                <icon-person-plus-fill @click.native="showAddContact(contact)" />
                <icon-person-dash-fill @click.native="showDeleteContact(contact)" />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot class="table-footer">
          <!-- pass -->
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import MsgException from "@/components/MsgException";

import IconPencilSquare from "@/components/icons/IconPencilSquare";
import IconPersonDashFill from "@/components/icons/IconPersonDashFill";
import IconPersonPlusFill from "@/components/icons/IconPersonPlusFill";

export default {
  components: { Loader, MsgException, IconPencilSquare, IconPersonDashFill, IconPersonPlusFill },
  name: "ContactListPage",
  data() {
    return {
      statusLoad: 1,
      contacts: [],
    };
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
            this.contacts.push(el);
          });
          this.statusLoad = 0;
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

    showContact(contact, event) {
      this.showEditContact(contact, event);
    },

    showEditContact(contact) {
      console.log("showEditContact", contact);
      this.$router.push({ name: "ContactInfo", params: { mode: "edit", contact } });
    },

    showAddContact(contact) {
      console.log("showAddContact", contact);
      this.$router.push({ name: "ContactInfo", params: { mode: "add" } });
    },

    showDeleteContact(contact) {
      console.log("showDeleteContact", contact);
      this.$router.push({ name: "ContactInfo", params: { mode: "delete", contact } });
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

    & .table-body .table-row {
      &:hover {
        outline: 1px solid lighten($color-text, 40);
      }

      &:active {
        outline-color: lighten($color-text, 20);
      }
    }

    & .icon-wrap {
      margin: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      & .icon {
        padding: 4px;

        &:hover {
          color: $bg-header;
        }
      }
    }
  }
}
</style>