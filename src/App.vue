<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="la">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/messages" class="nav-link">Messages</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/recherche" class="nav-link">Recherche</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/a-propos" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="logout">Deconnexion</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      la:localStorage.getItem('usertoken')
    }
  },
  updated() {
    this.la = localStorage.getItem('usertoken')
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
      this.$router.push({name:'Login'})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
