<template>
<div class="containe-fluid">

  <div class="col col-lg-7">
    <div class="col">
      <div class="bg-warning">
        <h1>Iniciar sesion</h1>
        <form @submit.prevent="login">
          <div>
            <label for="email">email</label>
            <input type="email" v-model="email" id="email">
          </div>
          <div>
            <label for="password">password</label>
            <input type="password" v-model="password" id="password">

            <div v-if="error"><samp style="color: red">Las credenciales no son correctas</samp></div>
          </div>
          <button type="submit">Iniciar sesion</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>

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
