<template>
  <v-container>
    <h1>Hola mundo Sandor Clegane!</h1>
    <li v-for="user in users" :key="user.id">{{ user.nombre }}</li>
    <v-btn outline color="primary" dark>text</v-btn>
    <v-alert :value="true" type="error">This is a error alert.</v-alert>
    <v-timeline>
      <v-timeline-item v-for="n in 4" :key="n" color="red lighten-2" large>
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsersAPI();
  },
  methods: {
    getUsersAPI() {
      axios
        .get("http://localhost:3000/api/usuario")
        .then(response => {
          this.users = response.data.usuarios;
          console.log("Los usuarios son:", response);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>