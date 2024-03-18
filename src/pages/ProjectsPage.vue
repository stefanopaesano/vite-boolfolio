<script>
import AppProjects from '../components/AppProjects.vue';
import axios from 'axios';

export default {
 
  data() {
    return {
        mainTitle: 'il nuovo progetto',
        projects: []
    }
    },
    components: {
        AppProjects
    },

  methods: {
    getApi() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(res => {
          console.log(res.data)
          this.projects = res.data;
        })
        .catch(error => {
          this.error = error.message;
        })
     
    },
    createNewProject() {
    
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
        <main class="container">

        <div class="container">
        <h1 class="text-primary text-center">Progetti</h1>


        <button class="btn btn-primary mb-3 ms-4">
            Crea Nuovo Progetto <i class="fa-solid fa-plus"></i>
        </button>
        
        
        <div>
            <AppProjects :projects="projects"></AppProjects>
        </div>
        
        
        

        </div>
        </main>
</template>

<style lang="scss" scoped>

main {
  background-color: yellow;
}

h1{
  color: red;
}
</style>
