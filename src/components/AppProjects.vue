<script>
export default {
  props: {
    projects: Array 
  },
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<template>
  <div class="card-container">

    <div class="card" v-for="project in projects" :key="project.id">

      <div class="card-header">

        <img :src="project.image" alt="">

        <h1>titolo</h1>

        <h2 class="card-title">{{ project.title }}</h2>

      </div>
      
      <div class="card-body">
        <h3>{{ project.description }}</h3>
        
        <p>{{ project.date }}</p>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 , h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
}
img{
  width: 100%;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  
  width: 30%; 
  margin: 10px; 
  
}
.card-header{
     border: 5px solid black;
 }
 .card-body{
     border-right: 5px solid black;
     border-left: 5px solid black;
     border-bottom: 5px soli black;
 }
</style>
