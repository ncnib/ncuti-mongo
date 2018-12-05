<template>
  <div class="posts">
    <h1>Compléter la feuille de temps d'un bénévole</h1>
      <div class="form">
        <div>
          <p /><label for="prenom"> Nom: {{this.nom}} </label>
          <p /><label for="prenom"> Prenom: {{this.prenom}} </label>
          <p /><label for="date_naissance"> Date de naissance: {{this.date_naissance}}</label>
        </div>
        <div>
          <label for="datetemps">Entrez les heures pour le bénévole: </label>
        </div>
        <div>
          <input type="date" name="datetemps" placeholder="AAAA-MM-JJ" v-model="feuilletemp.date">
        </div>
        <div>
          <input type="number" name="heures" placeholder="Nombre d'heures travaillés" v-model="feuilletemp.nbheures">
        </div>
        <div>
          <button class="app_post_btn" @click="addTemps">Enregistrer</button>
        </div>
      </div>
  </div>
</template>

<script>
import TravauxService from "@/services/TravauxService";
export default {
  name: "AjouterFeuilleTemps",
  data() {
    return {
      nom:"",
      prenom:"",
      date_naissance:"",
      feuilletemp: []

    };
  },
  mounted() {
    this.getTravaux();
  },
  methods: {
    async getTravaux(){
      const response = await TravauxService.getTravaux({
        id: this.$route.params.id
      });
      this.nom = response.data.nom;
      this.prenom = response.data.prenom;
      this.date_naissance = response.data.date_naissance;
      
    },
    async addTemps() {
      await TravauxService.addTemps({
        id: this.$route.params.id,
        nom: this.nom,
        prenom: this.prenom,
        date_naissance: this.date_naissance,
        feuilleTemp: this.feuilleTemp
      });
      this.$router.push({ name: "Travaux" });
    }
  }
};
</script>
<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>