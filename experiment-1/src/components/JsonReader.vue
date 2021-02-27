<template>
  <div id="JsonReader">
    <div class="folder-container">
      <div class="folder-head">
        <h1>Папка</h1>
        <hr />
      </div>
      <div class="folder-body" v-if="folders.size">
        <div
          class="folder-body-content"
          v-for="folder in folders"
          :key="folder[0]"
          :title="titleFormat(folder[1])"
          @click="showFolder(folder[0])"
        >
          <span class="folder-name" v-text="nameFormat(folder[1].name)">Name Folder</span>
          <b-icon-x-circle
            v-if="idFocusFolder === folder[1].id"
            class="folder-name-icon"
          ></b-icon-x-circle>
          <b-icon-arrow-right v-else class="folder-name-icon"></b-icon-arrow-right>
        </div>
      </div>
    </div>
    <div class="file-container" v-if="isVisibilityFolder">
      <div class="file-head">
        <h1>Файл</h1>
        <hr />
      </div>
      <div class="file-body">
        <div
          class="file-body-content"
          v-for="file in files"
          :key="file[0]"
          :title="titleFormat(file[1])"
          @click="showFile(file[1].id)"
        >
          <span class="file-name" v-text="nameFormat(file[1].name)">Name File</span>
          <b-icon-arrow-right class="file-name-icon"></b-icon-arrow-right>
        </div>
      </div>
    </div>
    <div class="view-container">
      <component :is="FileComponent" v-bind="PropsComponent"></component>
    </div>

    <div class="mini-info" @click="calcVisibilityInfo">Информация</div>
    <div class="info-container" v-if="isVisibilityInfo">
      <div class="info-head">
        <h1>Информация</h1>
        <hr />
      </div>
      <div class="info-body">
        <div class="info-body-content" v-for="(value, index) of infoList" :key="index">
          {{ index }} : {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import vue-*
import Pdf from 'vue-pdf'
import VueTable from '@lossendae/vue-table'
import { BIconArrowRight, BIconXCircle } from 'bootstrap-vue'

// Import *
import jsonData from '@/json/data.json'
import XLSX from 'xlsx'

export default {
  props: [],
  components: { Pdf, VueTable, BIconArrowRight, BIconXCircle },
  name: 'JsonReader',
  data() {
    return {
      data: jsonData.data,

      folders: new Map(),
      files: new Map(),

      infoList: null,

      isVisibilityInfo: false,
      isVisibilityFolder: false,

      idFocusFolder: null,
      idFocusFile: null,

      FileComponent: null,
      PropsComponent: null
    }
  },

  created() {
    this.parseStructure(this.data)
  },

  watch: {
    idFocusFile(newId, oldId) {
      console.log('newId', newId)

      if (!newId || !this.files.has(newId)) {
        return { info: 'Необходимо выбрать файл' }
      }

      console.log('Файл найден', newId)

      this.infoList = this.files.get(newId)
    }
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
      })
    },

    parseFiles(data) {
      data.forEach((el) => {
        if (el.parent_id || el.files) return false

        this.files.set(el.id, el)
      })
    },

    showFolder(id) {
      if (!this.folders.has(id)) return

      this.updateFiles(this.folders.get(id))
    },

    updateFiles(folder) {
      this.files.clear()

      this.parseFiles(folder.files)

      this.updateVisibilityFiles(folder.id)
    },

    updateVisibilityFiles(idFolder) {
      if (this.idFocusFolder === idFolder) {
        this.isVisibilityFolder = !this.isVisibilityFolder
        this.idFocusFolder = null
      } else {
        this.isVisibilityFolder = true
        this.idFocusFolder = idFolder
      }
    },

    showFile(id) {
      const file = this.files.get(id)
      if (!file) return

      this.idFocusFile = file.id

      if (/^.*\.(pdf|PDF)$/.test(file.url)) {
        this.FileComponent = 'pdf'
        this.PropsComponent = {
          src: file.url,
          style: 'display: block; width: 100%'
        }
      }

      if (/^.*\.(xlsx|xls|xlsm)$/.test(file.url)) {
        this.fetchXLS(file.url)
          .then((json) => {
            this.FileComponent = 'vue-table'
            this.PropsComponent = {
              columns: Object.keys(json[0]).map((value) => {
                return { name: value }
              }),
              rows: json
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    calcVisibilityInfo() {
      this.isVisibilityInfo = !this.isVisibilityInfo
    },

    fetchXLS(url) {
      return this.downloadArrayBuffer(url)
        .then((data) => {
          return this.xlsRead(data)
        })
        .then((workbook) => {
          return this.xlsToJSON(workbook)
        })
    },

    downloadArrayBuffer(url) {
      return fetch(url)
        .then((responce) => {
          return responce.arrayBuffer()
        })
        .then((arraybuffer) => {
          return new Uint8Array(arraybuffer)
        })
    },

    xlsRead(data) {
      let arr = []
      data.forEach((el) => {
        arr.push(String.fromCharCode(el))
      })

      let bstr = arr.join('')

      /* Call XLSX */
      return XLSX.read(bstr, { type: 'binary' })
    },

    xlsToJSON(workbook) {
      /* DO SOMETHING WITH workbook HERE */
      let firstSheetName = workbook.SheetNames[0]
      let worksheet = workbook.Sheets[firstSheetName]
      let html = XLSX.utils.sheet_to_json(worksheet, { raw: true })

      return html
    },

    titleFormat(data) {
      return `${
        '\r' // ------------------
      }Fullname: «${data.name}»${
        '\n' // ------------------
      }Created: ${data.created_at ? data.created_at : '-'}${
        '\n' // ------------------
      }Updated: ${data.updated_at ? data.updated_at : '-'}`
    },

    nameFormat(name) {
      if (name.length < 15) return name

      return `...${name.slice(-15)}`
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

.folder-container,
.file-container,
.info-container {
  width: 200px;
  min-width: 200px;
  border: 1px solid #0b5aa2;
  border-top: 10px solid #0b5aa2;
  background: #fffffe;
}

.info-container {
  width: 250px;
  min-width: 250px;
}

.mini-info {
  text-transform: lowercase;
  writing-mode: vertical-rl;
  color: #eee;
  background-color: #0b5aa2;
  padding-top: 32px;
  cursor: pointer;
}

.folder-container h1,
.file-container h1,
.info-container h1 {
  padding: 5px;
  margin: 10px;
  color: #0b5aa2;
}

.folder-container hr,
.file-container hr,
.info-container hr {
  width: 40%;
  margin: 0px 15px;
  border: 1px solid #0b5aa2;
  background-color: #0b5aa2;
}

.folder-body,
.file-body,
.info-body {
  margin: 10px;
  display: grid;
  grid-gap: 10px;
}

.folder-body-content,
.file-body-content {
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  grid-gap: 10px;
  border: 1px solid transparent;
  cursor: pointer;
}

.info-body-content {
  width: 100%;
  word-break: break-all;
  border: 1px solid transparent;
}

.folder-body-content:hover,
.file-body-content:hover {
  border-radius: 15px;
  border: 1px solid #0b5aa2;
}

.folder-name-icon,
.file-name-icon {
  align-self: center;
  font-size: 15px;
  color: #0b5aa2;
  font-weight: bold;
}

.folder-name-icon:hover,
.file-name-icon:hover {
  color: rgb(172, 60, 60);
}

.view-container {
  flex: 1 0;
}

table {
  border-collapse: collapse;
  border: 1px solid #eee;
  width: 100%;
}
table >>> th {
  font-weight: bold;
  padding: 5px;
  background: #b4c9dd;
  border: 1px solid #0b5aa2;
}
table >>> td {
  padding: 5px 10px;
  border: 1px solid #537a9e;
  text-align: left;
}
table >>> tr:nth-child(odd) {
  background: #fff;
}
table >>> tr:nth-child(even) {
  background: #b4c9dd;
}
</style>
