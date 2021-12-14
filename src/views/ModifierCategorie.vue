<template>
  <div class="new-category d-flex flex-column justify-content-center align-items-center">
    <h1>Modifier le message </h1>
    <div v-if="confirm">
      Catégorie modifiée avec succès !
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre" id="titre" class="form-control"/>
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="couleur">Couleur</label>
      <input type="text" name="couleur" v-model="couleur" id="couleur" class="form-control"/>
    </div>
    <div class="form-group my-2">
      <button @click="modifCategorie" class="form-control">Modifier</button>
    </div>
    <div class="form-group my-2">
      <button @click="deleteCategorie" class="form-control">Supprimer</button>
    </div>
  </div>
</template>

<script>

import {putCategorie} from '../api/categorie'
import {deleteCategorie} from '../api/categorie'

export default {
  name: 'ModifierCategorie',
  data () {
    return {
      couleur: this.$route.params.categorie.couleur,
      titre: this.$route.params.categorie.titre,
      confirm: false
    }
  },
  methods: {
    async modifCategorie() {
      await putCategorie(this.$route.params.categorie.id,{
        couleur: this.couleur,
        titre: this.titre
      }).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        //this.$router.push('/categories') //redirection
      })
    },
    async deleteCategorie() {
      await deleteCategorie(this.$route.params.categorie.id,{
        couleur: this.couleur,
        titre: this.titre
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    },

  }
}

</script>