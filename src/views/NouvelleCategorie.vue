<template>
  <div class="new-category d-flex flex-column justify-content-center align-items-center">
    <h1>Création d'une catégorie</h1>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre"  id="titre" class="form-control"/>
    </div>
    <div class="form-group d-flex flex-column justify-center align-items-start my-2">
      <label for="couleur">Couleur</label>
      <input type="text" name="couleur" v-model="couleur"  id="couleur" class="form-control"/>
    </div>
    <div class="form-group my-2">
      <button @click="ajoutCategorie" class="form-control">Ajouter</button>
    </div>
  </div>
</template>

<script>

import {postCategorie} from '../api/categorie'

export default {
  name: 'NouvellesCategorie',
  data () {
    return {
      couleur: '',
      titre: '',
      confirm: false
    }
  },
  methods: {
    async ajoutCategorie() {
      await postCategorie({
        couleur: this.couleur,
        titre: this.titre
      }).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        //this.$router.push('/categories') //redirection
      })
    }
  }
}

</script>