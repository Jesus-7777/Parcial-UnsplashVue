<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">Imagenes</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3" v-for="imagen in imagenes" :key="imagen.id">
      <Imagen :imagen="imagen" />
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Imagen from "../components/Imagen";

export default {
  name: "Index",
  components: {
    Imagen,
  },
  data() {
    return {
      imagenes: [],
    };
  },
  mounted() {
    axios.get("http://localhost:1337/Imagenes/")
      .then((res) => {
        this.imagenes = res.data;
        console.log(res);

      })

  }
}
</script>
