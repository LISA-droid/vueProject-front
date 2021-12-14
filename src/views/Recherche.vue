<template>
  <div class="search d-flex flex-column justify-content-center align-items-center">
    <h1>Page de recherche</h1>
      <div class="container-fluid col-4 mt-5">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="recherche">
          <b-btn class="btn" @click="search">Search</b-btn>
        </form>
      </div>
    <div v-if="reponse">
      <div v-for="message in reponse" :key="message.id" class="text-start my-3 p-5 w-100" :class="'bg-' + message.category.couleur + '-300'">
        <h4>{{message.titre}}</h4>
        <p>{{message.category.titre}}</p>
        <p>{{message.contenu}}</p>
        <router-link :to="{name:'voir-message', params: {message: message}}" class="py-2 px-3 rounded bg-gray-100 m-2">Voir le message</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Recherche',
  data () {
    return {
      recherche :'',
      reponse: null
    }
  },
  methods: {
    async search() {
      await axios.get('http://localhost/iut/vueProject/public/index.php/api/nimportequoi/recherche/'+ this.recherche, {
        headers: {
          'Authorization': `Bearer ` + localStorage.getItem('usertoken')
        }
      }).then((recherche) => {
        this.reponse = recherche.data
      })
    }
  }
}

</script>