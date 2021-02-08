<template>
  <div id="JsonReader">
    <div class="folder-container">
      <h1>Папка</h1>
      <ul v-if="folders.size">
        <li
          v-for="folder in folders"
          :key="folder[0]"
          :title="titleFormat(folder[1])"
          v-text="folder[1].name"
        ></li>
      </ul>
    </div>
    <div class="file-container">
      <h1>Файл</h1>
      <ul v-if="files.size">
        <li
          v-for="file in files"
          :key="file[0]"
          :title="titleFormat(file[1])"
          v-text="file[1].name"
          @click="showFile(file[1].url)"
        ></li>
      </ul>
    </div>
    <div class="view-container">
      <component :is="FileComponent" v-bind="FileComponent.props"></component>
    </div>
  </div>
</template>

<script>
import jsonData from '../json/data.json'

export default {
  props: [],
  components: {},
  name: 'JsonReader',
  data() {
    return {
      data: [],
      folders: new Map(),
      files: new Map(),

      FileComponent: () => {
        this.FileComponent.props = {}
        return null
      }
    }
  },

  created() {
    console.clear()

    this.data = jsonData.data

    this.parseStructure(this.data)

    console.log('folders: ', this.folders)
    console.log('files:', this.files)
  },

  methods: {
    parseStructure(data) {
      this.parseFolders(data)
    },

    parseFolders(data) {
      data.forEach((el) => {
        if (!el.parent_id && !el.files) return false

        this.folders.set(el.id, el)

        if (el.under_folder) {
          this.parseFolders(el.under_folder)
        }

        if (el.files.length) {
          this.parseFiles(el.files)
        }
      })
    },

    parseFiles(data) {
      data.forEach((el) => {
        if (el.parent_id || el.files) return false

        this.files.set(el.id, el)
      })
    },

    showFile(path) {
      if (/^.*\.(pdf|PDF)$/.test(path)) {
        this.FileComponent = () => import('vue-pdf')
        this.FileComponent.props = { src: path }
      }

      if (/^.*\.(xlsx|xls|xlsm)$/.test(path)) {
        this.FileComponent = () => import('vue-json-excel')
        this.FileComponent.props = { src: path }
      }
    },

    titleFormat(data) {
      return `
      Создан: ${data.created_at ? data.created_at : '-'}
      Обнавлен: ${data.updated_at ? data.updated_at : '-'}
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#JsonReader {
  width: 100%;
  display: flex;
}

#JsonReader > div {
  border: 1px solid black;
}

.folder-container {
  min-width: 120px;
  max-width: 300px;

  background-color: #444;
}

.file-container {
  min-width: 120px;
  max-width: 300px;

  background-color: #666;
}

.view-container {
  flex: 1 0 auto;

  background-color: #888;
}

h1 {
  padding: 10px;

  text-align: center;
  border-bottom: 1px dashed black;
}

li {
  display: block;
  padding: 15px;
  cursor: pointer;
}

li:hover {
  background-color: chocolate;
  color: black;
  font-weight: bold;
}
</style>
