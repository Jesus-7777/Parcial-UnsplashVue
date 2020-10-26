<template>
<body>
  <router-view />
</body>
</template>

<script>
/* import axios from 'axios';
//import Imprimir from "./components/ImprimirBusqueda";
export default {
  name: 'Login',
  /*  components: {
     Imprimir,
   }, 
  data() {
    return {
      email: '',
      password: '',
      //search: '',
      error: false,
      //correcto: false,
    }
  }, */
/* mounted() {
  this.traerTags();
},
watch: { //TODO: Escuchar una variable en especifico
  search(value) {
    //console.log(value)
    //this.buscar(value)//TODO: aqui el metodo buscar
    this.traerTags(value) //TODO se cambian por la funcion traerTag
  }
},
traerTags(search = null) { //TODO: se resive los parametros 

  let params = {
    _sort: this.default_sort
  }
  if (search && search != "") { //TODO: ESta es la logica para buscar
    params.nombre_contains = search
  }
  axios.get('http://localhost:1337/imagenes', {
    params
  }).then((response) => {
    this.tags = response.data

  });
}, */
/*  methods: {
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
}*/
</script>
