<template>
  <div class="login">
    <form class="form" @submit.prevent="handleSubmit">
      <h1>TPV-APP</h1>
      <div class="input-container">
        <span>Username</span>
        <input
          v-model="username"
          name="username"
          type="text">
      </div>
      <div class="input-container">
        <span>Password</span>
        <input
          name="password"
          v-model="password"
          type="password">
      </div>

      <bk-button class="btn" @click="handleSubmit">Login</bk-button>
    </form>
  </div>
</template>

<script>
import BkButton from '@/components/BkButton.vue';

export default {
  name: 'Login',

  components: {
    BkButton,
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    handleSubmit() {
      if (this.username !== '' && this.password !== '') {
        this.$emit('onLogin', {
          username: this.username,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped>
  .login {
    height: 100vh;
    padding: 0 25px;
    background-image: url('../assets/taxi-bg-min.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  .form {
    width: 100%;
    height: 100%;
    background: none;
    left: 50%;
    top: 50%;
    text-align: center;
    position: relative;
    transform: translate(-50%, -50%);
  }
  .form h1 {
    color: #FFF;
    text-align: center;
    margin: 0;
    padding: 15px;
  }
  .input-container {
    display: flex;
    align-items: center;
    position: relative;
    margin: 30px 0;
  }
  .input-container input {
    color: #FFF;
    font-size: 0.938rem;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    height: 50px;
    border-bottom: 2px solid #FFF;
  }
  .input-container input:focus {
    border-bottom: 3px solid #118060;
  }

  .input-container span {
    color: #FFF;
    bottom: 45px;
    position: absolute;
    font-size: 1.34rem;
    font-weight: 700;
  }
  .btn {
    width: 100%;
  }
  .btn:hover, .btn:active {
    color: #FFF;
    border: 2px solid #FFF;
  }
</style>
