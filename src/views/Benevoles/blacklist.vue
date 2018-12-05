<template>
  <div class="benevoles">
    <h1>Bénévoles indésirables</h1>
  <div class="table-wrap">
      <table align="center">
        <tr>
          <td width="250">Nom</td>
          <td width="250">Prénom</td>
        </tr>
        <tr v-for="(item) in benevoles" :key="item._id">
          <td> {{ item.nom }}</td>
          <td>{{ item.prenom }}</td>
        </tr>
      </table>
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
      const response = await BenevolesService.listeBenevole();
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