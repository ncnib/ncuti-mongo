<template>
  <div class="benevoles">
    <h1>Bénévoles</h1>
  <div v-if="benevoles.length > 0" class="table-wrap">
      <div class="add">
        <router-link v-bind:to="{ name: 'NouveauBenevole' }" class="">Ajouter un bénévole   | </router-link>

        <router-link v-bind:to="{ name: 'BlacklistBenevole' }" class=""> Liste noire Agape (blacklist)</router-link>
      </div>
      <table>
        <tr>
          <td>Nom</td>
          <td width="550">Prénom</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="(item) in benevoles" :key="item._id">
          <td>{{ item.nom }}</td>
          <td>{{ item.prenom }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'ModifierBenevole', params: { id: item._id } }">Modifier</router-link> 
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      Aucun bénévole pour le moment. Ajouter en un pour commencer <br /><br />
      <router-link v-bind:to="{ name: 'NouveauBenevole' }" class="add_post_link">Ajouter un bénévole</router-link>
</div>
  </div>
</template>

<script>
import BenevolesService from "@/services/BenevolesService";
export default {
  name: "benevoles",
  data() {
    return {
      benevoles: []
    };
  },
  mounted() {
    this.getBenevoles();
  },
  methods: {
    async getBenevoles() {
      const response = await BenevolesService.fetchBenevoles();
      this.benevoles = response.data.benevoles;
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