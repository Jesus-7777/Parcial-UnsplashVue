<template>
<nav class="navbar navbar-expand-sm navbar-light bg-white sticky-top">
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

    <div class="btn-group mr-3" role="group" aria-label="Button group with nested dropdown">
      <div class="btn-group" role="group">

        <div class="input-group-prepend ">
          <div class="mr-3 mt-1">Categorias</div>

          <select class="input-group-text bg-transparent  custom-select rounded-right pr-5" v-model="checkedNames" aria-describedby="emailHelp">
            <option class="text-dark" v-for="tag in tags" :key="tag.id" :value="tag.nombre">
              {{ tag.nombre }}
            </option>
            <option class="text-dark" value="" selected>Todas</option>
          </select>
        </div>
      </div>
    </div>

    <div class="nav-link">
      <!--<button class="btn btn-primary "><a href="/tags" class="text-white badge">Tags</a></button>-->
      <button type="button" class="mr-4 d-none d-md-block border-secondary hidden-xl-up btn btn-oflink mr-2 ml-2 border-left "><a href="/home" class="text-body" style="text-decoration: none;">Mis imagenes</a></button>
    </div>
    <button type="button" class="hidden-xl-up btn btn-oflink mr-2 ml-2 border-left" data-target="#mymodel" data-toggle="modal"> Login</button>
    <!-- boton registrarme -->
    <button type="button" class="btn btn-success " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
      Registrarme </button>

    <!-- fin boton registro -->
    <form @submit.prevent="crearUser">
      <div class="modal" id="exampleModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title text-center w-100 font-weight-bold">Crear un usuario</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="close">&times;</button>
            </div>

            <div class="modal-body mx-3">
              <div class="md-form md-5 mb-3">
                <label for="pausername" data-error="wrong" data-success="right">Username</label>
                <input type="text" class="form-control validate" v-model="pausername" id="pausername">
              </div>
              <div class="form-group">
                <label for="paemail">Correo Electronico </label>
                <input type="email" class="form-control" id="paemail" v-model="paemail" aria-describedby="emailHelp" />
              </div>
              <div class="md-form md-5">
                <label for="papassword" data-error="wrong" data-success="right">Password</label>
                <input type="password" class="form-control validate" v-model="papassword" id="papassword">
              </div>
              <div v-if="error"><samp style="color:red">Usuario creado correctamente</samp></div>
              <div v-if="correcto"><samp style="color:green">Usuario no creado</samp></div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-primary">Iniciar </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</nav>

<!-- Buscador-->
<div class="container col-lg-6 col-md-8 pr-4">
  <div class="abs-center">
    <input class=" form-control mr-sm-2 border-secondary  m-2" style="width: 100%; border-radius: 40px; " v-model="buscar" type="search" aria-autocomplete="list" placeholder="Encuentra Fondos de pantalla, lugares, arte..." aria-label="Search">

  </div>
</div>
<!-- CARRUSEL -->
<div id="carouselExampleCaptions" class="carousel slide mb-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/i37cf18a400e509f4/version/1603853534/image.jpg" class="d-block w-100" style="max-height: 480px;" alt="asas">
      <div class="carousel-caption d-none d-md-block">

        <h1 class="display-3"> <b>BIENVENIDOS</b></h1>
        <p class=" h4"> <i>Todas las experiencias las puedes encontrar en un solo lugar.</i></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/ic0967dbf8feb6b22/version/1603853534/image.jpg" class="d-block w-100" style="max-height: 480px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1> ENTRETENIMIENTO</h1>
        <p class="h5"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/i07a21a07e3c2d184/version/1603853534/image.jpg" class="d-block w-100" style="max-height: 480px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1> LUGARES GENIALES</h1>
        <p class="h5"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
      </div>
    </div>
  </div>
</div>
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
          <div v-if="error"><samp style="color:red">Credenciales incorrectas</samp></div>
          <div v-if="correcto"><samp style="color:green">Credenciales correctas</samp></div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary">Iniciar </button>
        </div>
      </div>
    </div>
  </div>
</form>

<!--Imprimir-->

<div class="container">

  <div class="row d-flex flex-row bd-highlight">

    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3" v-for="imagen in imagenes" :key="imagen.id">
      <Imagen :imagen="imagen" />
    </div>

    <!--<div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 p-2 bd-highlight" v-for="busqueda in tags" :key="busqueda">
      <Busqueda :busqueda="busqueda" />-->

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
      pausername: '',
      paemail: '',
      papassword: '',
      username: '',
      password: '',
      //search: '',
      tags: [],
      imagenes: [],
      error: false,
      correcto: false,
      checkedNames: "",
      buscar: "",
      //formType: false,

    };
  },
  mounted() {
    axios.get("http://localhost:1337/tags").then((response) => {
        this.tags = response.data;
      }),
      (this.Search = debounce(this.Search, 600));

    this.traerImagenes();
    //this.traerTags = debounce(this.traerTags, 700); // TODO: pone un lapso de tiempo para la peticion a los servidores "importante"
    //this.traerTags();

  },
  watch: {
    checkedNames(value) {
      this.Search(value);
    },
    buscar(value) {
      this.Search(value);
    },
  },

  methods: {
    Search(value) {
      axios
        .get("http://localhost:1337/imagenes?_sort=id%3ADESC", {
          params: {
            "tags.nombre_contains": value,
          },
        })
        .then((response) => {
          this.imagenes = response.data;
          console.log("imagenes")
        });
    },

    /* traerTags(search = null) { //TODO: se resive los parametros 

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
    }, */

    traerImagenes() {
      axios.get("http://localhost:1337/Imagenes/")
        .then((res) => {
          this.imagenes = res.data;
        });
    },
    crearUser() {
      fetch('http://localhost:1337/auth/local/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ // se envia todo el form
            username: this.pausername,
            email: this.paemail,
            password: this.papassword,
          })
        }).then(async (response) => {
          if (!response.ok) {
            throw await response.json()
          }
          return response.json()
          //this.formType = true;
        })
        .then((data) => {
          this.correcto = true;
          localStorage.setItem('token', data.jwt); //solo guarda valor string
          localStorage.setItem('user', JSON.stringify(data.user)); //para resivir un objeto se lo convierte con JSON.stringify
          this.$router.push('/')
        })
        .catch((err) => {
          this.error = true

        })

    },

    login() {
      this.error = false,
        this.correcto = false,

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
          this.correcto = true;
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
