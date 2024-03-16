<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <div class="container bg-warning">
            <div class="logo">
               <img  src="https://th.bing.com/th/id/R.81ed7fc23bf456c196f4d2464c33bb69?rik=sNK38geb%2baghNw&pid=ImgRaw&r=0" alt="">
            </div>
          
            <div class="container d-flex justify-content-end">
                <button class="button">
                    <router-link :to="{ name: 'Home' }" class="link">
                        Home
                    </router-link>
                </button>

                <button class="button">
                    <router-link :to="{ name: 'projects.index' }" class="link">
                        Projects
                    </router-link>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
button {
    border: none;
    border-radius: 5px;
    background-color: #3498db; 
    color: white; 
    font-size: 16px;
    padding: 8px 16px;
    margin: 0 10px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9; 
}

.link {
    color: inherit; 
    text-decoration: none;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}
img{
    width: 200px;
    height: 50px;
}

.container {
    display: flex;
    align-items: center;
}

.container.d-flex.justify-content-end {
    justify-content: space-between;
    
}
</style>