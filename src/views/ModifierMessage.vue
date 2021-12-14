<template>
  <div class="new-category d-flex flex-column justify-content-center align-items-center">
    <p>{{this.$route.params.message.id}}</p>
    <div v-if="confirm">
      Message modifié avec succès !
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre" id="titre" class="form-control"/>
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="contenu">Contenu</label>
      <textarea name="contenu" v-model="contenu" id="contenu" class="form-control" rows="5" cols="50"/>
    </div>
    <div class="form-group my-2">
      <button @click="modifMessage" class="form-control">Modifier</button>
    </div>
    <div class="form-group my-2">
      <button @click="deleteMessage" class="form-control">Supprimer</button>
    </div>
  </div>
</template>

<script>

import {putMessage} from '../api/message'
import {deleteMessage} from '../api/message'

export default {
  name: 'ModifierMessage',
  data () {
    return {
      contenu: this.$route.params.message.contenu,
      titre: this.$route.params.message.titre,
      confirm: false
    }
  },
  methods: {
    async modifMessage() {
      await putMessage(this.$route.params.message.id,{
        contenu: this.contenu,
        titre: this.titre,
        date: new Date(),
        category:'/iut/vueProject/public/index.php/api/categories/' + this.$route.params.message.category.id,
      }).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        //this.$router.push('/categories') //redirection
      })
    },
    async deleteMessage() {
      await deleteMessage(this.$route.params.message.id).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
      })
    },

  }
}

</script>