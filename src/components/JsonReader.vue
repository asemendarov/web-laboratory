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
      <component :is="FileComponent" v-bind="PropsComponent"></component>
    </div>
  </div>
</template>

<script>
// Import vue-*
import Pdf from 'vue-pdf'
import VueTable from '@lossendae/vue-table'

// Import *
import jsonData from '@/json/data.json'
import XLSX from 'xlsx'

export default {
  props: [],
  components: { Pdf, VueTable },
  name: 'JsonReader',
  data() {
    return {
      data: jsonData.data,
      folders: new Map(),
      files: new Map(),

      FileComponent: null,
      PropsComponent: null
    }
  },

  created() {
    this.parseStructure(this.data)
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

    showFile(url) {
      if (/^.*\.(pdf|PDF)$/.test(url)) {
        this.FileComponent = 'pdf'
        this.PropsComponent = { src: url }
      }

      if (/^.*\.(xlsx|xls|xlsm)$/.test(url)) {
        this.fetchXLS(url)
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

  /* background-color: #444; */
}

.file-container {
  min-width: 120px;
  max-width: 300px;

  /* background-color: #666; */
}

.view-container {
  flex: 1 0 auto;

  /* background-color: #888; */
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

table {
  width: 100%;
}
</style>
