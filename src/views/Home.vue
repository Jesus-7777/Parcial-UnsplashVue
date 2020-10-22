<template>
<div>
  <h1>Bienvenido {{user.email}}</h1>
  <button @click="salir">Salir</button>
</div>
<div>
  <h1>Mis imagenes</h1>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: {}
    }
  },
  mounted() {
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
  methods: {
    salir() {
      //console.log("saliendo")
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/login')
    }
  }

};
</script>
