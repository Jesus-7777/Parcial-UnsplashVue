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
      <div class="col col-xs-12 mr-3 form-inline my-lg-0">
        <input class="form-control mr-sm-2 border-secondary btn-light col-sm-10 m-2" style="border-radius: 40px; width: 380px;" v-model="search" type="text" placeholder="Fotos de alta Calidad">
        <!--<a href="#">
            <svg width="24" height="24" class="_2-tlh _1azRR _1mPD6" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
              <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
            </svg>
          </a>-->
      </div>
    </div>
    <button type="button" class="btn-sm btn btn-oflink mr-2 ml-2 border-left " data-target="#mymodel" data-toggle="modal"> Login</button>
    <button type="button" class="btn btn-sm btn-success mr-3">Registrarme</button>
    <!--<div>
      <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
      </svg>
    </div>-->
  </div>
</nav>
<form @submit.prevent="login">
  <div class="modal" id="mymodel">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title text-center w-100 font-weight-bold">Iniciar sesion</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="close">&times;</button>
        </div>

        <div class="modal-body mx-3">
          <div class="md-form md-5">
            <label for="username" data-error="wrong" data-success="right">Username</label>
            <input type="text" class="form-control validate" v-model="username" id="username">
          </div>
          <div class="md-form md-5">
            <label for="password" data-error="wrong" data-success="right">Password</label>
            <input type="password" class="form-control validate" v-model="password" id="password">
          </div>
          <div v-if="error"><samp style="color:red">Las credenciales no son correctas</samp></div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary">Iniciar </button>
        </div>
      </div>
    </div>
  </div>
</form>

<div class="nav-scroller col-12 col-sm-12 col-lg-12">
  <nav class="nav  d-flex justify-content-start">
    <a class="p-2 mr-3 text-muted border-right" href="#">Editorial</a>
    <a class="p-2 mr-3 text-muted" href="#">Arquitectura</a>
    <a class="p-2 mr-3 text-muted" href="#">Eventos</a>
    <a class="p-2 mr-3 text-muted" href="#">Mas...</a>
  </nav>
</div>

<div class="nav-link">
  <button class="btn btn-primary "><a href="./" class="text-white badge">Inicio</a></button>
  <!--<button class="btn btn-primary "><a href="/tags" class="text-white badge">Tags</a></button>-->
  <button class="btn btn-primary "><a href="/home" class="text-white badge">Mis imagenes</a></button>
</div>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">Imagenes</h1>
    </div>
  </div>

  <div class="row d-flex flex-row bd-highlight">

    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3" v-for="imagen in imagenes" :key="imagen.id">
      <Imagen :imagen="imagen" />
    </div>
    <!--<div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 p-2 bd-highlight" v-for="busqueda in tags" :key="busqueda">
      <Busqueda :busqueda="busqueda" />
    </div>-->
  </div>

</div>
</template>

<script>
import axios from 'axios';
import debounce from "debounce";
import Imagen from "../components/Imagen";
import Busqueda from "../components/Busqueda";

export default {
  name: "Index",
  components: {
    Imagen,
    Busqueda,
  },
  data() {
    return {
      username: '',
      password: '',
      search: '',
      tags: [],
      imagenes: [],
      page: 1,
      pages: 1,
      error: false,
      //formType: false,

    };
  },
  mounted() {
    this.traerImagenes();
    this.traerTags = debounce(this.traerTags, 700); // TODO: pone un lapso de tiempo para la peticion a los servidores "importante"
    //this.traerTags();

  },
  watch: {
    search(value) {
      //this.buscar(value)
      this.traerTags(value)
    }
  },

  methods: {
    traerTags(search = null) { //TODO: se resive los parametros 

      let params = {
        _sort: this.default_sort
      }
      if (search && search != "") { //TODO: ESta es la logica para buscar
        params.nombre_contains = search
      }
      axios.get('http://localhost:1337/tags/', {
        params
      }).then((response) => {
        this.tags = response.data;
      });
    },

    traerImagenes() {
      axios.get("http://localhost:1337/Imagenes/")
        .then((res) => {
          this.imagenes = res.data;
        });
    },

    login() {
      this.error = false,
        //this.formType = false,
        //this.correcto = false
        fetch('http://localhost:1337/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ // se envia todo el form
            identifier: this.username,
            password: this.password,
          })
        }).then(async (response) => {
          if (!response.ok) {
            throw await response.json()
          }
          return response.json()
          //this.formType = true;
        })
        .then((data) => {

          localStorage.setItem('token', data.jwt); //solo guarda valor string
          localStorage.setItem('user', JSON.stringify(data.user)); //para resivir un objeto se lo convierte con JSON.stringify
          this.$router.push('/')
        })
        .catch((err) => {
          this.error = true

        })
    }
  },
}
</script>
