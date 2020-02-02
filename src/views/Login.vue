<template>
  <div class="login">
    <form class="form" @submit.prevent="handleLogin">
      <h2>{{ $t('login.titleApp') }}</h2>
        <BkInput
          dataCy="username"
          v-model="user.username"
          name="username"
          type="text"
          :required="true"
          color="primary"
          :label="$t('login.usernameLabel')"
        />
        <BkInput
          dataCy="password"
          v-model="user.password"
          name="password"
          type="password"
          :required="true"
          color="primary"
          :label="$t('login.passwordLabel')"
        />
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
import { required, minLength } from 'vuelidate/lib/validators';
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

  validations() {
    return {
      user: {
        username: {
          required,
        },
        password: {
          required,
          minLength: minLength(4),
        },
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
          .catch(() => this.$notify({
            group: 'notify',
            title: 'Login error',
            text: 'Error',
            duration: 3000,
            type: 'error',
          }));
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
  .btn {
    width: 100%;
    &:hover, &:active {
      color: $white;
      border: 2px solid $white;
    }
  }
</style>
