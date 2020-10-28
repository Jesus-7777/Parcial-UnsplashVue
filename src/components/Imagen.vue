<template>
<div class="card imagen_card mb-4">
  <img :src="'http://localhost:1337'+imagen.url.url" class="card-img-top img-rounded imagenes__img" />
  <div class=" bg-secundary ">
    <small>
      <p class="card-title text-center">{{ imagen.user.username }}</p>

    </small>
  </div>
</div>
</template>

<script>
export default {
  name: "Imagen",
  props: ["imagen"],

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
