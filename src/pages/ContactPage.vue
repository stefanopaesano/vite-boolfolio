<script>
export default {
  data() {
    return {
      name:'',
      surname:'',
      email:'',
      message:''
    }
  },
  methods: {
    sendMessage() {
      console.log('name', this.name, typeof this.name);
      console.log('surname', this.surname, typeof this.surname);
      console.log('email', this.email, typeof this.email);
      console.log('message', this.message, typeof this.message);
    }
  }
}
</script>

<template>
  <form class="container" @submit.prevent="sendMessage">

    <h1>Contatti</h1>

    <div>
      <label for="name">Nome <span>*</span></label>
      <input v-model="name" class="w-500px" type="text" id="name" placeholder="Scrivi il tuo nome...">
    </div>

    <div>
      <label for="surname">Cognome <span>*</span></label>
      <input v-model="surname" type="text" id="surname" placeholder="Scrivi il tuo cognome...">
    </div>

    <div>
      <label for="email">Email <span>*</span></label>
      <input v-model="email" type="email" id="email" placeholder="Scrivi la tua email...">
    </div>

    <div>
      <label for="message">Messaggio <span>*</span></label>
      <textarea v-model="message" id="message" placeholder="Scrivi il tuo messaggio..."></textarea>
    </div>

    <button class="btn btn-warning mb-3 ms-4" type="submit">Invia</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  border: 2px solid black;
  text-align: start;
  background-color: rgb(49, 49, 243);
}
label {
  margin: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  background-color: red;
  border: 1px solid black;
}
h1 {
  color: white;
}
</style>
