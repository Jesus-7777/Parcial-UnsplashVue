<template>
<nav class="navbar navbar-expand-sm navbar-light ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img class="m-2" src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" style="width:auto; height: auto;">

  <a class="nav-link nav-item active text-dark d-flex justify-content-center" href="#">
    <h3><strong> Unsplash </strong></h3> <span class="sr-only">(current)</span>
  </a>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto  mt-lg-0">
      <li class="nav-item active">

      </li>

      <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
      <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
    </ul>
    <div>
      <button type="button" class="mr-4 d-none d-md-block border-secondary hidden-xl-up btn btn-oflink mr-2 ml-2 border-left "><a href="/" class="text-body " style="text-decoration: none;">Inicio</a></button>
    </div>
    <button type="button" class="mr-4 d-none d-md-block border-secondary hidden-xl-up btn btn-oflink mr-2 ml-2 border-left " data-toggle="modal" data-target="#mymodel"> Cargar imagen</button>

    <div>
      <form @submit.prevent="login">
        <div class="modal" id="mymodel">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="modal-title text-center w-100 font-weight-bold">Cargar Imagen</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="close">&times;</button>
              </div>
              <div class="container-fluid l-container">
                <div class="border border-warning rounded">
                  <h1 class="text-darck text-center">Cargar Imagen</h1>
                  <input type="file" @change="onFileSelected" accept="image/jpeg, image/png, image/jpg, image/gif" oninput="pic.src=window.URL.createObjectURL(this.files[0])" />
                  <div class="preview">
                    <img id="pic" />
                  </div>
                  <button @click="onUpload" class="btn rounded border-dark">
                    Enviar Imagen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <button class="btn btn-primary" @click="salir">Salir</button>
    <!-- d-none d-md-block  -->
    <!--Cargar imagen-->

    <div class="col-xs-12 mr-4 ml-5 text-center ">
      <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person-circle mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
      </svg>
      <h6> {{user.username}}</h6>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLabel"> Registro de usuaio </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nombre:</label>

                <input type="text" class="form-control" id="recipient-name" />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Correo Electronico </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1"> Contraseña </label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
            </form>
          </div>
          <button type="submit" class="btn btn-dark mb-3 mx-3" data-dismiss="modal"> Enviar </button>
        </div>
      </div>
    </div>
    <!-- fin boton registro -->
  </div>
</nav>

<!-- CARRUSEL -->
<div id="carouselExampleCaptions" class="carousel slide mb-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1489532043309-25f2c1b4b82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80" class="d-block w-100" style="max-height: 500px;" alt="asas">
      <div class="carousel-caption d-none d-md-block">

        <h1 class="display-3"> <b>BIENVENIDOS</b></h1>
        <p class=" h4"> <i>Todas las experiencias las puedes encontrar en un solo lugar.</i></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1594952881603-0c314c0d25e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1467&q=80" class="d-block w-100" style="max-height: 480px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1> ENTRETENIMIENTO</h1>
        <p class="h5"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1596799295743-e01a7ccbbc63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1524&q=80" class="d-block w-100" style="max-height: 480px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1> LUGARES GENIALES</h1>
        <p class="h5"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
      </div>
    </div>
  </div>
</div>

<div class="text-center">
  <h1>Bienvenido {{user.email}}</h1>
</div>
<div class="container text-center">
  <div>
    <div class="mb-5 mt-5">
      <h1>Mis imagenes</h1>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3" v-for="imagen in imagenes" :key="imagen.id">
        <Imagen :imagen="imagen" />
        <button class="btn btn-primary"> <a class="text-white decoracion" @click="eliminar(imagen.id)">Eliminar</a></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
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
      selectedFile: null,
    }
  },
  mounted() {
    this.autentificarUser();
    this.mostrarImagen();
    // this.eliminar();
  },

  methods: {

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      // const tokens = localStorage.getItem('token');
      const fd = new FormData();
      fd.append("url", this.selectedFile, this.selectedFile.name);
      axios.post("http://localhost:1337/Imagenes", fd, {

        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      }).then((res) => {
        console.log(res);
      });
    },
    mostrarImagen() {
      const tokens = localStorage.getItem('token');
      axios.get("http://localhost:1337/Imagenes/me", {
          headers: {
            'Authorization': 'Bearer ' + tokens,
          },
        })
        .then((res) => {
          this.imagenes = res.data;
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
