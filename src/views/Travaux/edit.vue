<template>
  <div class="posts">
    <h1>Modifier le travail d'un bénévole</h1>
      <div class="form">
        <div>
          <p /><label for="prenom"> Nom: {{this.nom}} </label>
          <p /><label for="prenom"> Prenom: {{this.prenom}} </label>
          <p /><label for="date_naissance"> Date de naissance: {{this.date_naissance}}</label>
        </div>
        <div>
        <br /><label for="date_rencontre">Date de rencontre:</label>
        <br /><input type="date" name="date_rencontre" placeholder="AAAA-MM-JJ*" v-model="date_rencontre">
        </div>
        <div>
        <br /><label for="date_debut">Date de début: </label>
        <br /><input type="date" name="date_debut" placeholder="AAAA-MM-JJ*" v-model="date_debut">
        </div>
        <div>
        <br /><label for="date_limite">Date limite: </label>
        <br /><input type="date" name="date_limite" placeholder="AAAA-MM-JJ*" v-model="date_limite">
        </div>
        <div>
        <br /><label for="nbheures">Nombre d'heures: </label>
        <br /><input type="number" name="nbheures" placeholder="entrez une valeur numérique" v-model="nbheures">
        </div>
        <div>
        <label for="type_travail">Type de travail   :</label>
        <select font-size="12px" name="type_travail" multiple v-model="type_travail">
        <option >compensatoire</option>
        <option >communautaire</option>
        <option >encadrement</option>
        <option >autre</option>
        </select>
        </div>
        <div>
        <label for="statut">  Statut du travail   :</label>
        <select font-size="12px" name="statut" v-model="statut">
        <option >en cours</option>
        <option >terminé</option>
        </select>
        </div>
        <div>
        <br /><label for="entente">Entente: </label>
        <br /><input type="text" name="entente" v-model="entente">
        </div>
        <div>
        <br /><label>Informations sur l'agent ou le responsable du bénévole: </label>
        <p /><input type="text" name="nom_agent" placeholder="Prénom et nom" v-model="nom_agent">
        <p /><input type="text" name="tel_agent" placeholder="Télephone de l'agent ou responsable" v-model="tel_agent">
        <p /><input type="text" name="telecopie" placeholder="Télecopie de l'agent ou responsable" v-model="telecopie">
        </div>
        <div>
          <button class="app_post_btn" @click="updateTravail">Modifier</button>
        </div>
      </div>
  </div>
</template>

<script>
import TravauxService from "@/services/TravauxService";
export default {
  name: "ModifierTravail",
  data() {
    return {
      nom:"",
      prenom:"",
      date_naissance:""

    };
  },
  mounted() {
    this.getTravaux();
  },
  methods: {
    async getTravaux() {
      const response = await TravauxService.getTravaux({
        id: this.$route.params.id
      });
      this.nom = response.data.nom;
      this.prenom = response.data.prenom;
      this.date_naissance = response.data.date_naissance;
      
    },
    async updateTravail() {
      await TravauxService.updateTravail({
        id: this.$route.params.id,
        nom: this.nom,
        prenom: this.prenom,
        date_naissance: this.date_naissance
        
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