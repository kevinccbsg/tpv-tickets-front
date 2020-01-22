<template>
  <div class="login">
    <form class="form" @submit.prevent="handleLogin">
      <h1>{{ $t('login.titleApp') }}</h1>
      <div class="input-container">
        <span>{{ $t('login.usernameLabel') }}</span>
        <input
          data-cy="username"
          v-model="user.username"
          name="username"
          type="text">
      </div>
      <div class="input-container">
        <span>{{ $t('login.passwordLabel') }}</span>
        <input
          data-cy="password"
          name="password"
          v-model="user.password"
          type="password">
      </div>

      <bk-button
        data-cy="btn"
        class="btn"
        @click="handleLogin">
          {{ $t('login.button') }}
      </bk-button>
    </form>
  </div>
</template>

<script>
import BkButton from '@/components/BkButton.vue';
import { doLogin } from '@/api';
import storage from '@/persistence';

const { setItem } = storage('cookieStorage');

export default {
  name: 'Login',

  components: {
    BkButton,
  },

  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    handleLogin() {
      if (this.user.username !== '' && this.user.password !== '') {
        doLogin(this.user)
          .then(({ data }) => {
            setItem('session_token', data.jwt);
            this.$router.push('/');
          })
          .catch(() => console.log('error'));
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
