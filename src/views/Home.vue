<template>
<nav class="navbar navbar-expand-sm navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img class="m-2" src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" style="width:auto; height: auto;">

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto  mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link " href="#">
          <h3><strong> Unsplash </strong></h3> <span class="sr-only">(current)</span>
        </a>
      </li>
    </ul>
    <div class="row">
      <div class="col col-xxs-12">
        <form class="mr-3 form-inline my-lg-0">
          <input class="form-control mr-sm-2 border-secondary btn-light col-sm-10 m-2" style="border-radius: 40px; width: 380px;" v-model="search" type="text" placeholder="Fotos de alta Calidad">
          <a href="#">
            <svg width="24" height="24" class="_2-tlh _1azRR _1mPD6" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
              <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
            </svg>
          </a>
        </form>
      </div>
    </div>
    <button type="button" class="btn-sm btn btn-oflink mr-2 ml-2 border-left " data-target="#mymodel" data-toggle="modal"> Login</button>
    <button type="button" class="btn btn-sm btn-success">Registrarme</button>
  </div>
</nav>
<div>
  <h1>Bienvenido {{user.email}}</h1>
  <button class="btn btn-primary "><a href="/" class="text-white badge">Inicio</a></button>
  <button class="btn btn-primary" @click="salir">Salir</button>
</div>
<div class="container text-center">
  <div>
    <h1>Mis imagenes</h1>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3" v-for="imagen in imagenes" :key="imagen.id">
        <Imagen :imagen="imagen" />
        <a class="tabla_margin" href="#" @click="eliminar(imagen.id)">Eliminar</a>
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
    // this.eliminar();
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

    eliminar(id) {
      axios.delete("http://localhost:1337/Imagenes/" + id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')

        },
      }).then((response) => {
        this.mostrarImagen()
      })
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
