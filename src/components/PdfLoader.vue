<template>
  <div class="load-pdf-container">
    <h1>Añade un pdf con tus movimientos</h1>
    <form novalidate @submit.prevent="sendFile">
      <div class="pdf-container">
        <label for="file"><span>Upload File</span></label>
        <input
          accept="application/pdf"
          name="file"
          id="file"
          required
          v-on:change="setFile"
          type="file"
        />
      </div>
      <bk-button
        data-cy="btn"
        class="btn"
        type="submit"
      >
          Upload
      </bk-button>
    </form>
  </div>
</template>

<script>
import BkButton from '@/components/BkButton.vue';
import { uploadPDF } from '../api';

export default {
  name: 'PdfLoader',
  components: {
    BkButton,
  },
  data() {
    return {
      pdfFile: null,
    };
  },
  methods: {
    setFile(evt) {
      this.pdfFile = evt.target.files[0];
    },
    sendFile(evt) {
      console.log(evt.target.checkValidity());
      console.log(this.pdfFile);
      if (evt.target.checkValidity()) {
        const data = new FormData();
        data.append('file', this.pdfFile);
        return uploadPDF(data);
      }
    },
  },
};
</script>

<style scoped>
  .load-pdf-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  form {
    width: 80%;
    margin: 0 auto;
  }
  .pdf-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 200px;
    border: 2px dotted #000;
    border-radius: 10px;
    position: relative;
    margin-top: 30px;
  }
  .pdf-container label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .pdf-container input {
    position: absolute;
    visibility: hidden;
  }
  .btn {
    width: 100%;
    margin: 20px 0;
  }
</style>
