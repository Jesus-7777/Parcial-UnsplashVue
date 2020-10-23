<template>
<div>
  <h1>Bienvenido {{user.email}}</h1>
  <button @click="salir">Salir</button>
</div>
<div class="container text-center">
  <div>
    <h1>Mis imagenes</h1>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3" v-for="imagen in imagenes" :key="imagen.id">
        <Imagen :imagen="imagen" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Imagen from "../components/Imagen";
export default {
  name: 'Home',
  components: {
    Imagen,
  },
  data() {
    return {
      user: {},
      imagenes: [],
    }
  },
  mounted() {
    this.autentificarUser();
    this.mostrarImagen();
  },

  methods: {
    mostrarImagen() {
      const tokens = localStorage.getItem('token');
      axios.get("http://localhost:1337/Imagenes/me/", {
          headers: {
            'Authorization': 'Bearer ' + tokens,
          },
        })
        .then((res) => {
          this.imagenes = res.data;
          console.log(res);

        })
    },
    autentificarUser() {
      this.user = JSON.parse(localStorage.getItem('user'));
      const tokens = localStorage.getItem('token');
      fetch('http://localhost:1337/Imagenes/me', {
        headers: {
          'Authorization': 'Bearer ' + tokens,
        },
      }).then(res => res.json()
        .then(data => {

          console.log(data)
        })
      )
    },
    salir() {
      //console.log("saliendo")
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/')
    },

    /*  fetch() {
      let result = axios.get("http://localhost:1337/Imagenes/").then(res => {
        this.imagenes = data;
      }).catch(err => {
        console.log(err)
      });
    }*/
  }

}
</script>
