<template>
<h1>Editar tags</h1>
<a href="/tags">Volver</a>

<form @submit.prevent="guardar">
  <div>
    <label for="nombre">Nombre</label>
    <input type="text" v-model="nombre" id="nombre" />
  </div>
  <button type="submit">Guardar</button>
</form>
</template>

<script>
import axios from "axios";
export default {
  name: 'EditTag',
  data() {
    return {
      nombre: "",
      id: null,
      token: null,
    };
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.id = this.$route.params.id
    //console.log(this.$route)
    axios.get("http://localhost:1337/tags/" + this.id, {
      headers: {
        'Authorization': 'Bearer ' + this.token,

      },
    }).then((response) => {
      this.nombre = response.data.nombre
    });
  },

  methods: {

    guardar() {

      axios.put("http://localhost:1337/tags/" + this.id, {
        nombre: this.nombre,

      }, {
        headers: {
          'Authorization': 'Bearer ' + this.token,

        },

      }).then((response) => {
        this.$router.push("/tags")
      })
    },
  },
}
</script>
