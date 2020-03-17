<template>
  <div class="appRoot loginPage">
    <img class="seloHabibs" src="img/seloHabibs.svg" alt="">
    <h2 class="appTitle">Dashboard faturamento</h2>
    <form action="" class="loginForm" ref="loginForm">
      <input class="formInput" type="text" name="fldLogin" autocomplete="username" placeholder="Login" v-model="loginForm.userName">
      <input class="formInput" type="password" name="fldSenha" autocomplete="current-password" placeholder="Senha" v-model="loginForm.password">
      <button class="btnSubmit" type="submit" name="btnSubmit" v-on:click="authUser($event)">Entrar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  components: {
    // Counter
  },
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    authUser(evt) {
      // Remove previous feedback class
      this.$refs.loginForm.classList.remove('animShake');
      evt.preventDefault();
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: myHeaders,
        body: JSON.stringify(this.loginForm),
        redirect: "follow"
      };

      fetch(
        "https://apivendas.alsaraiva.com.br/api/v1/login",
        requestOptions
      ).then((response) => {
        response.json()
        .then((result) => {
          if (result.success && result.data !=='Usuário ou senha inválidas') {
            localStorage.setItem('credentials', JSON.stringify(this.loginForm));
            localStorage.setItem('apiKey', result.data.accessToken);
            
            this.$router.push('faturamento');
          } else {
            // Login error feedback
            this.$refs.loginForm.classList.add('animShake');

          }
        })
      });
    }
  }
};
</script>
<style scoped>
  .loginPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D8D8D8;
    /* background-image: url('/img/trash.png');
    background-size: 100% auto; */
    padding: 6.133vw;
    font-family: 'Proxima Nova - Thin';
    overflow: hidden auto;
  }

  .seloHabibs {
    width: 33.06vw;
    margin-bottom: 5.33vw;
  }

  .appTitle {
    text-align: center;
    font-size: 7vmin;
    color: #EB1E23;
    font-size: 7.15vw;
    letter-spacing: 1.25vw;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25.33vmin;
  }

  .formInput {
    width: 88vw;
    max-width: 366px;
    height: 50px;
    border: 0;
    border-radius: 25px;
    font-size: 1.4em;
    padding: 0 5vw;
  }

  .formInput::placeholder {
    font-size: 14px;
    color: #C1C1C1;
    text-transform: uppercase;
  }

  .formInput:first-of-type {
    margin-bottom: 4vw;
  }

  .btnSubmit {
    width: 36.8vw;
    height: 33px;
    background-color: #00AF8C;
    color: #FFF;
    text-transform: uppercase;
    border: 0;
    border-radius: 16px;
    font-size: 14px;
    margin-top: 5.6vw;
  }

  @media screen and (orientation: landscape) {
    .loginPage {
      justify-content: flex-start;
    }
  }
</style>