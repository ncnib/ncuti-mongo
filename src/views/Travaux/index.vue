<template>
  <div class="travaux">
    <h1>Travaux</h1>
  <div v-if="travaux.length > 0" class="table-wrap">
      <table>
        <tr>
          <td width="100">Nom</td>
          <td width="150">Prénom</td>
          <td width="500" align="center">Action</td>
        </tr>
        <tr v-for="(item) in travaux" :key="item._id">
          <td>{{ item.nom }}</td>
          <td>{{ item.prenom }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'ModifierTravail', params: { id: item._id } }">Modifier  |</router-link>
            <router-link v-bind:to="{ name: 'AjouterEvenement', params: { id: item._id } }"> Ajouter événement  |</router-link>
            <router-link v-bind:to="{ name: 'AjouterFeuilleTemps', params: { id: item._id } }"> Feuille de temps   |</router-link>
            <a href="#" @click.prevent="deleteTravaux(item._id)"> Archiver</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import TravauxService from "@/services/TravauxService";
export default {
  name: "Travaux",
  data() {
    return {
      travaux: []
    };
  },
  mounted() {
    this.getTravaux();
  },
  methods: {
    async getTravaux() {
      const response = await TravauxService.listTravaux();
      this.travaux = response.data.travaux;
    },
    async deleteTravaux(id) {
      if (confirm("Êtes vous sur de vouloir archiver le travail en cours?")) {
        await BenevolesService.deleteTravaux(id);
        this.$router.push({ name: "Travaux" });
      }
    }
  }
};
</script>

<style type="text/css">
.add {
  margin-bottom: 50px;
  font-size: 18px;
}
.table-wrap {
  width: 45%;
  margin: 50px auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>