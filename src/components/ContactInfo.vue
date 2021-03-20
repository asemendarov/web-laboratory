<template>
  <div class="contact-info">
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
  </div>
</template>

<script>
// Import Input Components
import InputTextWithCancel from "@/components/InputTextWithCancel";
// Import Icon Components
import IconTrash from "@/components/icons/IconTrash";
import IconKeyboard from "@/components/icons/IconKeyboard";
import IconNodePlus from "@/components/icons/IconNodePlus";

export default {
  name: "ContactInfo",
  components: { InputTextWithCancel, IconTrash, IconKeyboard, IconNodePlus },
  props: {
    // Начальные данные контакта
    data: { type: Array },
  },
  data() {
    return {
      // Объект хранящий название и значение новой контактной информации
      newProperty: {
        key: null,
        value: null,
      },
    };
  },
  computed: {
    contactData() {
      return this.data;
    },
  },
  methods: {
    // Обрабатывает события Change на компоненте Input
    handlerChangeInput() {
      // this.historyChanges.pushState(this.contactData);
    },

    // Обрабатывает события Click на кнопке Delete Property
    handlerClickDeleteProperty(idx) {
      this.$emit("click", "delete", idx);
      // this.deletePropertyFromContactData(idx);
    },

    // Обрабатывает события Click на кнопке Add Property
    handlerClickAddProperty(property) {
      this.$emit("click", "add", property);
      // this.addPropertyToContactData(property);
    },
  },
};
</script>

<style lang="">
/* pass */
</style>