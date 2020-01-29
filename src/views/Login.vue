<template>
  <div class="login">
    <form class="form" @submit.prevent="handleLogin">
      <h1>{{ $t('login.titleApp') }}</h1>
      <div class="input-container">
        <input
          data-cy="username"
          v-model="user.username"
          name="username"
          required
          type="text">
        <label>{{ $t('login.usernameLabel') }}</label>
      </div>
      <div class="input-container">
        <input
          data-cy="password"
          name="password"
          v-model="user.password"
          required
          type="password">
        <label>{{ $t('login.passwordLabel') }}</label>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #192346;
    clip-path: polygon(0 0, 100% 0, 1000% 0%, 100% 100%, 0 85%);
  }
  .form {
    width: 80%;
    height: 100%;
  }
  .form h1 {
    color: #FFF;
    text-align: center;
    font-size: 2.2rem;
    padding: 25px 0;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .input-container input:active ~label,
  .input-container input:focus ~label,
  .input-container input:valid ~label {
    bottom: 50px;
  }

  .input-container label {
    color: #FFF;
    bottom: 12px;
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
