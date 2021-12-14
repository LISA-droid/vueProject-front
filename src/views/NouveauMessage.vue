<template>
  <div class="new-message d-flex flex-column justify-content-center align-items-center">
    <h1>Création d'un message dans {{this.$route.params.categorie.titre}}</h1>
    <div v-if="confirm">
      Message ajouté avec succès !
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre"  id="titre" class="form-control"/>
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="contenu">Contenu</label>
      <textarea name="contenu" v-model="contenu" id="contenu" class="form-control" rows="5" cols="50"/>
    </div>
    <div class="form-group my-2">
      <button @click="ajoutMessage" class="form-control">Ajouter</button>
    </div>
  </div>
</template>

<script>

import {postMessage} from '../api/message'

export default {
  name: 'NouveauMessage',
  data () {
    return {
      contenu: '',
      titre: '',
      confirm: false
    }
  },
  methods: {
    async ajoutMessage() {
      await postMessage({
        contenu: this.contenu,
        titre: this.titre,
        date: new Date(),
        category:'/iut/vueProject/public/index.php/api/categories/' + this.$route.params.categorie.id,


      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
      })
    }
  }
}

</script>