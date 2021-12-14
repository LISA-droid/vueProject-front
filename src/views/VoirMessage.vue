<template>
  <div class="message d-flex flex-column justify-content-center align-items-center" :class="'bg-' + message.category.couleur + '-400'">
    <h2 class="pt-2">{{message.titre}} </h2>
    <p>{{message.category.titre}}</p>
    <p class="px-5"> {{message.contenu}} </p>
    <router-link :to="{name:'modifier-message', params: {message: message}}" class="py-2 px-3 rounded bg-gray-100 m-2">Modifier le message</router-link>
  </div>
</template>

<script>
import {getMessage} from '../api/message'

export default {
  name: 'VoirMessage',
  data () {
    return {
      message: null
    }
  },
  watch: {
    $route () {
      this.actualiseMessage()
    }
  },
  async mounted () {
    await this.actualiseMessage()
  },
  methods: {
    async actualiseMessage () {
      this.message = await getMessage(this.$route.params.message.id).then((response) => {
        return response.data
      })
    }
  }
}

</script>