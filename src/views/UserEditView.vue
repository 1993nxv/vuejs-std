<template>
  <div class="usuario">
    <h1>This is an user page</h1> <br>

    <button @click="login()">Button</button>


    <pre style="text-align: left;">
      <!--{{ $route.params.id }}-->
      <!--{{ $router }}-->
    </pre>

  </div>
</template>

<script>
  export default {
    created() {
      //console.log(this.$route)
      //console.log(this.$router)
    },
    methods: {
      login () {
        this.$router.push('/about')
        console.log('Chegou')
      }
    }

  }

</script>

<style>

</style>
