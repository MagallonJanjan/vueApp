<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-center">
                Welcome to PassFast!
            </h5>
            <h6 class="card-subtitle mb-5 text-muted text-center"><i>Faster than you can imagine.</i></h6>
           <router-link to="/register">  <button v-on:click="buttonClick" class="btn alert-primary  m-1">Register</button> </router-link>
            <router-link to="/login"><button class="btn alert-info">Login</button></router-link>
        </div>
        <div>
           
        </div>
    </div>
</template>


<script>
export default {
    name : 'Welcome',
     methods : {
    buttonClick(){
      console.log('Hello');
        } 
    }
}
</script>


<style scoped>
.card {
    width: 30rem;
    margin-left:35%; 
    margin-top : 10%;
}

</style>