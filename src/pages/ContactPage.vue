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
      console.log('name');
      console.log('surname');
      console.log('email');
      console.log('message');
      
    }
  }
}
</script>

<template>
  <form @submit.prevent="sendMessage">

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


    <button type="submit">Invia</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  border: 2px solid black;
  text-align: start;
}
label {
  margin: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
}
h1 {
  color: white;
}
</style>
