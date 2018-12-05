<template>
  <div class="posts">
    <h1>Ajouter un bénévole</h1>
      <div class="form">
        <div>
          <input type="text" name="nom" placeholder="Nom*" v-model="nom">
        </div>
        <div>
          <input type="text" name="prenom" placeholder="Prénom*" v-model="prenom">
        </div>
        <div>
        <br><label align="left" for="date_naissance">Date de naissance*:</label>
        <br><input type="date" name="date_naissance" placeholder="Date de naissance" v-model="date_naissance">
        </div>
        <div>
        <input type="text" name="principal" placeholder="Téléphone principal*" v-model="principal">
        </div>
        <div>
        <input type="text" name="cellulaire" placeholder="Cellulaire" v-model="cellulaire">
        </div>
        <div>
        <input type="text" name="courriel" placeholder="Courriel" v-model="courriel">
        </div>
        <div>
        <input type="text" name="adresse" placeholder="Adresse" v-model="adresse">
        </div>
        <div>
        <input type="text" name="ville" placeholder="Ville" v-model="ville">
        </div>
        <div>
        <input type="text" name="code_postal" placeholder="Code postale" v-model="code_postal">
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
        <textarea rows="4" cols="50" name="occupation" placeholder="Expériences de travail/compétences" v-model="occupation"></textarea>
        </div>
        <div>
        <textarea rows="4" cols="50" name="fiche_sante" placeholder="Problèmes de santé et médication" v-model="fiche_sante"></textarea>
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
          <button class="app_post_btn" @click="addBenevole">Ajouter</button>
        </div>
      </div>
  </div>
</template>

<script>
import BenevolesService from "@/services/BenevolesService";
export default {
  name: "NouveauBenevole",
  data() {
    return {
      nom: "",
      prenom: "",
      date_naissance: "",
      principal: "",
      cellulaire: "",
      courriel: "",
      adresse: "",
      ville: "",
      code_postal: "",
      statut: "",
      situation_sociale: "",
      fiche_sante: "",
      allergies: "",
      occupation: "",
      interets: "",
      nom_urgence: "",
      tel_urgence: "",
      lien_urgence: ""
    };
  },
  methods: {
    async addBenevole() {
      await BenevolesService.addBenevole({
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