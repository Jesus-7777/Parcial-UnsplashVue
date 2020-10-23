<template>
<body>
  <nav class="navbar navbar-expand-sm navbar-light ">
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
      <form class="mr-3 form-inline my-lg-0">
        <input class="form-control mr-sm-2 border-secondary btn-light col-sm-10 m-2" style="border-radius: 40px; width: 380px;" type="search" placeholder="Fotos de alta Calidad" aria-label="Search">
        <a href="#">
          <svg width="24" height="24" class="_2-tlh _1azRR _1mPD6" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
            <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
          </svg>
        </a>
      </form>

      <button type="button" class="btn-sm btn btn-oflink mr-2 ml-2 border-left " data-target="#mymodel" data-toggle="modal"> Login</button>
      <button type="button" class="btn btn-sm btn-success">Registrarme</button>
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
              <label for="email" data-error="wrong" data-success="right">Email</label>
              <input type="email" class="form-control validate" v-model="email" id="email">
            </div>
            <div class="md-form md-5">
              <label for="password" data-error="wrong" data-success="right">Password</label>
              <input type="password" class="form-control validate" v-model="password" id="password">
            </div>
            <div v-if="error"><samp style="color:red">Las credenciales no son correctas</samp></div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-primary" aria-label="close">Iniciar</button>
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
      <a class="p-2 mr-3 text-muted" href="#">callejera</a>
      <a class="p-2 mr-3 text-muted" href="#">Tecnologia</a>
      <a class="p-2 mr-3 text-muted" href="#">Salud</a>
      <a class="p-2 mr-3 text-muted" href="#">Moda</a>
      <a class="p-2 mr-3 text-muted" href="#">Personas</a>
      <a class="p-2 mr-3 text-muted" href="#">Interiores</a>
      <a class="p-2 mr-3 text-muted" href="#">Naturaleza</a>
      <a class="p-2 mr-3 text-muted" href="#">Mas...</a>
    </nav>
  </div>
  <div class="nav-link">
    <button class="btn btn-primary "><a href="/" class="text-white badge">Inicio</a></button>
    <button class="btn btn-primary "><a href="/tags" class="text-white badge">Tags</a></button>
  </div>
  <router-view />
</body>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: false,
      //correcto: false,
    }
  },
  methods: {
    login() {
      this.error = false,
        //this.correcto = false
        fetch('http://localhost:1337/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ // se envia todo el form
            identifier: this.email,
            password: this.password,
          })
        }).then(async (response) => {
          if (!response.ok) {
            throw await response.json()
          }
          return response.json()
        })
        .then((data) => {
          //this.correcto = true;
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
