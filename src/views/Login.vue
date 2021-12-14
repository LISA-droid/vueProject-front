<template>
  <div class="login d-flex flex-column justify-content-center align-items-center mt-5">
    <h1>Connexion</h1>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email"  id="email" class="form-control"/>
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" id="password" class="form-control"/>
    </div>
    <div id="error"></div>
    <div class="form-group my-2">
      <button class="form-control" @click="login">Se connecter</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data () {
    return {
      email : null,
      password: null,
    }
  },
  methods: {
    login () {
        axios.post('http://localhost/iut/vueProject/public/index.php/authentication_token', {
          email : this.email,
          password : this.password,
        }).then(resp => {
          const token = resp.data.token
          const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
          localStorage.setItem('user', userData) // store the user in localstorage
          localStorage.setItem('usertoken', token) // store the token in localstorage
          this.isAuthenticated = true
          this.$router.push({name:'Home'})
        })
            .catch(() => {
              localStorage.removeItem('usertoken')
              this.isAuthenticated = false
              document.getElementById('error').innerText = "Email ou mot de passe incorrect"
            })
    },
  }
}
</script>
