<template>
  <div id="JsonReader">
    <div class="folder-container">
      <h1>Папка</h1>
    </div>
    <div class="file-container">
      <h1>Файл</h1>
    </div>
    <div class="view-container">
      <pre v-text="data"></pre>
    </div>
  </div>
</template>

<script>
// import jsonData from '../json/data.json'

export default {
  name: 'JsonReader',
  data() {
    return {
      data: null
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => (this.data = json))
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
  /* max-width: 300px; */

  background-color: #444;
}

.file-container {
  min-width: 120px;
  /* max-width: 300px; */

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
</style>
