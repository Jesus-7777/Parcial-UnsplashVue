<template>
<h1>En las tags</h1>
<a href="/tags/create">Crear</a>

<div>
  <input type="text" v-model="search" placeholder="Ingresa tu busqueda">
</div>

<table>
  <thead>
    <tr>
      <td>ID</td>
      <td>Nombre <button @click="cambiarOrden">Cambiar Orden</button></td>
      <td>Acciones</td>

    </tr>
  </thead>
  <tbody>
    <tr v-for="tag in tags" :key="tag.id">
      <td>{{tag.id}}</td>
      <td>{{tag.nombre}}</td>
      <td>
        <a :href="`/tags/${tag.id}/edit`">Editar</a>
        <a class="tabla_margin" href="#" @click="eliminar(tag.id)">Eliminar</a>
      </td>
    </tr>
  </tbody>
</table>
</template>

<style>
.tabla_margin {
  margin-left: 20px;
}
</style>

<script>
import axios from "axios";
import debounce from "debounce";

export default {
  name: "Tags",
  data() {
    return {
      tags: [],
      search: '',
      default_sort: 'nombre:ASC'
    };
  },

  mounted() {
    this.traerTags = debounce(this.traerTags, 700); // TODO: pone un lapso de tiempo para la peticion a los servidores "importante"
    this.traerTags();
  },

  watch: { //TODO: Escuchar una variable en especifico
    search(value) {
      //console.log(value)
      //this.buscar(value)//TODO: aqui el metodo buscar
      this.traerTags(value) //TODO se cambian por la funcion traerTag
    }

  },

  methods: {

    //TODO: Esto es otra forma de buscar
    /*buscar(value) {

      axios.get("http://localhost:1337/tags", {
        params: {
          nombre_contains: value
        }
      }).then((response) => {
        this.tags = response.data;
      })
    },*/

    //TODO: Aqui mismo se esta buscando
    traerTags(search = null) { //TODO: se resive los parametros 

      let params = {
        _sort: this.default_sort
      }
      if (search && search != "") { //TODO: ESta es la logica para buscar
        params.nombre_contains = search
      }
      axios.get('http://localhost:1337/tags', {
        params
      }).then((response) => {
        this.tags = response.data

      });
    },
    eliminar(id) {
      axios.delete("http://localhost:1337/tags/" + id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')

        },
      }).then((response) => {
        this.traerTags()
      })
    },
    cambiarOrden() {
      if (this.default_sort == 'nombre:ASC') {
        this.default_sort = 'nombre:DESC'
      } else {
        this.default_sort = 'nombre:ASC'
      }
      this.traerTags()
    }
  },
}
</script>
