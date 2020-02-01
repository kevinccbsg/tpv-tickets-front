<template>
  <div class="login">
    <form class="form" @submit.prevent="handleLogin">
      <h2>{{ $t('login.titleApp') }}</h2>
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
import { doLogin } from '@/api';
import storage from '@/persistence';

const { setItem } = storage('cookieStorage');

export default {
  name: 'Login',

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

<style lang="scss" scoped>
  @import "@/theme/index.scss";

  $background-shape: polygon(0 0, 100% 0, 1000% 0%, 100% 100%, 0 calculateRem(500px));

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: $brand;
    clip-path: $background-shape;
  }
  .form {
    width: 80%;
    margin-top: calculateRem(100px);
    h2 {
      color: $white;
      text-align: center;
      font-size: $fs-h2;
      padding: 25px 0;
    }
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin: 30px 0;
    input {
      color: $white;
      font-size: $fs-small;
      border: none;
      width: 100%;
      outline: none;
      background: none;
      height: 50px;
      border-bottom: 2px solid $white;
      &:active ~label,
      &:focus ~label,
      &:valid ~label {
        bottom: 50px;
      }
    }
    label {
      color: $white;
      bottom: 12px;
      position: absolute;
      font-size: $fs-large;
      font-weight: 700;
      transition: all .3s ease;
    }
  }
  .btn {
    width: 100%;
    &:hover, &:active {
      color: $white;
      border: 2px solid $white;
    }
  }
</style>
