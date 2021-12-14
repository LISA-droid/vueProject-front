<template>
  <div class="messages d-flex flex-column justify-content-center align-items-center bg-gray-100">
    <h2>Toutes les catégories</h2>
    <h3>Les messages</h3>
    <div v-for="message in messages" :key="message.id" class="text-start my-3 p-5 w-100" :class="'bg-' + message.category.couleur + '-300'">
      <h4>{{message.titre}}</h4>
      <p>{{message.category.titre}}</p>
      <p>{{message.contenu}}</p>
      <router-link :to="{name:'voir-message', params: {message: message}}" class="py-2 px-3 rounded bg-gray-100 m-2">Voir le message</router-link>
    </div>
  </div>
</template>

<script>
import {getMessages} from '../api/message'

export default {
  name: 'Messages',
  data () {
    return {
      messages: null
    }
  },
  async mounted () {
    this.messages = await getMessages().then((response) => {
      return response.data['hydra:member']
    })

  }
}

</script>