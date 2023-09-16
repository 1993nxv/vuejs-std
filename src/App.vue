<template>
  <div>
    <input 
      v-model="name"
      type="text"
    >

    {{ name }}
  </div>
</template>

<script>

  export default {
    
    name: 'App',

    data()
    {
      return {
        name : ''
      }
    
    },
    watch: {
      name(newValue) {
          if (newValue.length >= 4){
            this.SaveNewName(newValue)
          }
      }
    },
    methods: {
      SaveNewName(newValue){
        console.log('Ajax')
        console.log(newValue)
      }
    },
    computed: {}
  }

</script>

<style>

  #app {
    padding-top: 150px;
    margin-left: 150px;
    font-size: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #29292922;

  }
  input {
    border-radius: 3px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: 40px;
    width: 300px;
    font-size: 30px;
  }

</style>
