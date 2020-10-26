<template>
<div v-for="buscar in  busqueda.imagenes" :key="buscar" class="card imagen_card mb-4">
  <img :src="'http://localhost:1337'+buscar.url.url" class="card-img-top img-rounded imagenes__img" />
  <div class="div1 bg-secundary ">
    <small>
      <p class="card-title text-center">{{ busqueda.nombre }}</p>
    </small>
  </div>
</div>
</template>

<script>
export default {
  name: "Busqueda",
  props: ["busqueda"],
};
</script>

<style>
.imagenes__img {
  height: 250px;
  object-fit: cover;
  filter: brightness(70%);
}

.div1 {
  height: 25px;
}

.imagenes__img:hover {
  filter: brightness(100%);
}

.imagen_card {
  cursor: pointer;
}
</style>
