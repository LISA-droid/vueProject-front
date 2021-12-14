<template>
  <div class="about" :class="'bg-' + categorie.couleur + '-300'">
    <h2>{{ categorie.titre }}</h2>
    <h3>Les messages</h3>
    <router-link :to="{name:'nouveau-message', params: {categorie: categorie}}" class="py-2 px-3 rounded bg-gray-100 m-2">Nouveau message</router-link>
    <router-link :to="{name:'modifier-categorie', params: {categorie: categorie}}" class="py-2 px-3 rounded bg-gray-100 m-2">Modifier la catégorie</router-link>
    <article v-for="message in categorie.messages" :key="message.id" class="text-start my-3 p-5 w-100" :class="'bg-' + categorie.couleur + '-400'">
      <h4>{{ message.titre }}</h4>
      <p>{{ message.contenu }}</p>
      <router-link :to="{name:'voir-message', params: {message: message}}" class="py-2 px-3 rounded bg-gray-100 m-2">Voir le message</router-link>
    </article>
  </div>
</template>

<script>

import {getCategorie} from '../api/categorie'

export default {
  name: 'CategoriesMessages',
  data () {
    return {
      categorie: {}
    }
  },
  watch: {
    $route () {
      this.actualiseCategorie()
    }
  },
  async mounted () {
    this.actualiseCategorie()
  },
  methods: {
    async actualiseCategorie () {
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data
      })
    }
  }
}

</script>