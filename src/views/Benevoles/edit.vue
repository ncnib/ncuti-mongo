<template>
  <div class="posts">
    <h1>Modifier un bénévole</h1>
      <div class="form">
        <div>
        <p /><label >Nom: {{this.nom}} </label>
        <p /><label >Prenom: {{this.prenom}} </label>
        <p /><label >Date de naissance: {{this.date_naissance}} </label>
        </div>
        <div>
        <input type="text" name="principal" placeholder="Téléphone principal*" v-model="principal">
        </div>
        <div>
        <input type="text" name="cellulaire"  placeholder="Téléphone cellulaire" v-model="cellulaire">
        </div>
        <div>
        <input type="text" name="courriel" placeholder="@courriel" v-model="courriel">
        </div>
        <div>
        <input type="text" name="adresse"  placeholder="Adresse: # apt, numero civique rue" v-model="adresse">
        </div>
        <div>
        <input type="text" name="ville" placeholder="Ville" v-model="ville">
        </div>
        <div>
        <input type="text" name="code_postal"  placeholder="Code postal X9X 9X9" v-model="code_postal">
        </div>
        <div>
        <label for="statut">  Statut du bénévole</label>
        <select name="statut" v-model="statut">
        <option>en candidature</option>
        <option>engagé</option>
        <option>inactif</option>
        <option>indésirable</option>
        </select>
        <label for="situation_sociale">   Situation sociale</label>
        <select name="situation_sociale" v-model="situation_sociale">
        <option>employé</option>
        <option>employé sur appel</option>
        <option>aide sociale</option>
        <option>SAAQ/CSST</option>
        <option>chomage</option>
        <option>retraité</option>
        <option>autre</option>
        </select>
        </div>
        <div>
        <textarea rows="4" cols="50" name="occupation"  placeholder="Expérience de travail/Compétences" v-model="occupation"></textarea>
        </div>
        <div>
        <textarea rows="4" cols="50" name="fiche_sante"  placeholder="Problèmes de santé et médication" v-model="fiche_sante"></textarea>
        </div>
        <div>
        <input type="text" name="allergies" placeholder="Allergies" v-model="allergies">
        </div>
        <div>
        <br><label for="interets" >Intêrets   :</label>
        <select name="interets" multiple v-model="interets">
        <option>Ressourcerie</option>
        <option>Banque alimentaire</option>
        <option>Autre</option>
        </select>
      </div>       
        <div>
        <input type="text" name="contact_name" placeholder="Contact en cas d'urgence" v-model="contact_name">
        </div>
        <div>
        <input type="text" name="contact_tel" placeholder="Télephone du contact d'urgence" v-model="contact_tel">
        </div>
        <div>
        <input type="text" name="contact_lien" placeholder="Lien avec le contact" v-model="contact_lien">
        </div>
        <div>
          <button class="app_post_btn" @click="updateBenevole">Modifier</button>
        </div>
      </div>
  </div>
</template>

<script>
import BenevolesService from "@/services/BenevolesService";
export default {
  name: "ModifierBenevole",
  data() {
    return {
      nom:"",
      prenom:"",
      date_naissance:"",
      principal:"",
      cellulaire: "",
      courriel: "",
      adresse:"",
      ville:"",
      code_postal:"",
      statut:"",
      situation_sociale:"",
      fiche_sante:"",
      allergies:"",
      occupation:"",
      interets:"",
      nom_urgence:"",
      tel_urgence:"",
      lien_urgence:""
    };
  },
  mounted() {
    this.getBenevole();
  },
  methods: {
    async getBenevole() {
      const response = await BenevolesService.getBenevole({
        id: this.$route.params.id
      });
      this.nom = response.data.nom;
      this.prenom = response.data.prenom;
      this.date_naissance = response.data.date_naissance;
      this.principal = response.data.principal;
      this.cellulaire = response.data.cellulaire;
      this.courriel = response.data.courriel;
      this.adresse = response.data.adresse;
      this.ville = response.data.ville;
      this.code_postal = response.data.code_postal;
      this.statut = response.data.statut;
      this.situation_sociale = response.data.situation_sociale;
      this.fiche_sante = response.data.fiche_sante;
      this.allergies = response.data.allergies;
      this.occupation = response.data.occupation;
      this.interets = response.data.interets;
      this.contact_name = response.data.contact_name;
      this.contact_tel = response.data.contact_tel;
      this.contact_lien = response.data.contact_lien;
    },
    async updateBenevole() {
      await BenevolesService.updateBenevole({
        id: this.$route.params.id,
        nom: this.nom,
        prenom: this.prenom,
        date_naissance: this.date_naissance,
        principal: this.principal, 
        cellulaire: this.cellulaire,
        courriel: this.courriel,
        adresse: this.adresse,
        ville: this.ville,
        code_postal: this.code_postal,
        statut: this.statut,
        situation_sociale: this.situation_sociale,
        fiche_sante: this.fiche_sante,
        allergies: this.allergies,
        occupation: this.occupation,
        interets: this.interets,
        contact_name: this.contact_name, 
        contact_tel: this.contact_tel, 
        contact_lien: this.contact_lien
      });
      this.$router.push({ name: "Benevoles" });
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