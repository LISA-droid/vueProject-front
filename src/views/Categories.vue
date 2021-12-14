<template>
  <div class="categories d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex flex-row align-items-start col-12">
      <div class="col-2 categories-list sticky-top bg-gray-100">
        <table class="table table-hover">
          <thead>
          <th class="pt-4">
              Catégories
          </th>
          </thead>
          <tbody>
          <tr>
            <td>
              <router-link to="/messages">Voir tous les messages</router-link>
            </td>
          </tr>
          <tr v-for="categorie in categories" :key="categorie.id" :class="'bg-' + categorie.couleur + '-200'">
            <td>
              <router-link :to="{name:'categorie_messages', params: {id: categorie.id}}">
                {{categorie.titre}}
              </router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="/nouvelle-categorie">Nouvelle catégorie</router-link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <router-view class="col-10"></router-view>
    </div>
  </div>
</template>

<script>
import {getCategories} from '../api/categorie'
import {getMessages} from '../api/message'

export default {
  name: 'Categories',
  data () {
    return {
      categories: null,
      messages:null
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    }),
    this.messages = await getMessages().then((response) => {
      return response.data['hydra:member']
    })

  }
}

</script>