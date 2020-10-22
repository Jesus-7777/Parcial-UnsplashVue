<template>
<h1>Crear nueva tags</h1>
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
  name: 'CreateTag',
  data() {
    return {
      nombre: "",

    };
  },
  methods: {

    guardar() {
      const tokens = localStorage.getItem('token');
      const nombreuser = localStorage.getItem('name');
      axios.post("http://localhost:1337/tags", {
        nombre: this.nombre,

      }, {
        headers: {
          'Authorization': 'Bearer ' + tokens,

        },

      }).then((response) => {
        this.$router.push("/tags")
      })
    },
  },
}
</script>
