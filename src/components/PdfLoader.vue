<template>
  <div class="load-pdf-container">
    <h3>{{ $t('pdf.title') }}</h3>
    <form novalidate @submit.prevent="sendFile">
      <div class="pdf-container">
        <label for="file">
          <span v-if="!selectedName">{{ $t('pdf.fileInput') }}</span>
          <span v-else>{{ selectedName }}</span>
        </label>
        <input
          accept="application/pdf"
          name="file"
          id="file"
          required
          v-on:change="setFile"
          type="file"
        />
      </div>
      <BkButton
        data-cy="btn"
        class="btn"
        type="submit"
        :disabled="loading"
        :isLoading="loading"
      >
          {{ $t('pdf.button') }}
      </BkButton>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PdfLoader',

  data() {
    return {
      pdfFile: null,
      selectedName: '',
    };
  },

  computed: {
    ...mapGetters(['loading']),
  },

  methods: {
    ...mapActions(['sendPDF']),
    ...mapMutations({
      setLoading: 'SET_LOADING',
    }),
    setFile(evt) {
      const [file] = evt.target.files;
      this.selectedName = file.name;
      this.pdfFile = file;
    },
    sendFile(evt) {
      if (evt.target.checkValidity()) {
        const data = new FormData();
        data.append('file', this.pdfFile);
        this.setLoading(true);
        return this.sendPDF(data);
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/theme/index.scss";

  $file-border-color: #000;

  .load-pdf-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    h3 {
      font-size: $fs-h3;
      text-align: center;
      line-height: $base-line-height;
    }
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
    border: 2px dotted $file-border-color;
    border-radius: 10px;
    position: relative;
    margin-top: 30px;

    label {
      width: 100%;
      height: 100%;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    input {
      position: absolute;
      visibility: hidden;
    }
  }
  .btn {
    width: 100%;
    margin: 20px 0;
  }
</style>
