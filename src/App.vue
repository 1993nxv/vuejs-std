<template>
  
  <TheHeader v-show="showHeader" />

  <div v-show="showName">
    Nome: {{ name }} <br>
    Sobrenome: {{ lastName }}
  </div>
  
  <!--Diretiva v-if v-show-->
  <div v-if="accessLevel === 'admin'">Dep.: Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Dep.: Marketing</div>
  <div v-else>Dep.: User</div>
  <br>

  <!--Diretiva v-for-->
  <div 
    class="todos"
    v-for="obj in todos"
    v-bind:key="obj.id"
  >
    {{ obj.id }} &#61; {{ obj.title }}
  </div>

  <!--Diretiva v-bind-->
  <div>
    <img 
         v-bind:src="imgSrc" 
         :alt="imgAlt">
  </div>

  <!--Diretiva v-model-->
  <div>
    <label for="">Nome:</label> 
    <br>
    <input
      v-model="nameInput"
      type="text"
    >
    {{ nameInput }}
    <br>
    <br>
    <select v-model="sports">
      <option value=""></option>
      <option value="Futebol">Futebol</option>
      <option value="Ping Pong">Ping Pong</option>
      <option value="Jiu-jitsu">Jiu-jitsu</option>
    </select>
    {{ sports }}
    <br>
    <br>
    
    <input type="radio" v-model="newsLetter" value="Sim">
    Sim
    
    <input type="radio" v-model="newsLetter" value="Não">
    Não
    <br>
    {{ newsLetter }}

    
  </div>

  
</template>

<script>
  import TheHeader from './components/TheHeader.vue'

  export default {
    name: 'App',
    components: {
      TheHeader
    },
    data(){
      return { 
        showHeader: false,
        name: 'Wellington',
        lastName: 'Delmondes',
        showName: true,
        accessLevel: 'marketing',
        imgSrc: 'https://placehold.co/150x150',
        imgAlt: 'Imagem usuario dinamica',
        nameInput: "Delmondes",
        sports: '',
        newsLetter: '',

        todos: [
                {
                  "userId": 1,
                  "id": 1,
                  "title": "delectus aut autem",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 2,
                  "title": "quis ut nam facilis et officia qui",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 3,
                  "title": "fugiat veniam minus",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 4,
                  "title": "et porro tempora",
                  "completed": true
                },
                {
                  "userId": 1,
                  "id": 5,
                  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                  "completed": false
                }
              ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .todos{
    height: 40px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: left;
    padding-top: 20px;
    margin: 10px;
    padding-left: 30px;
    background-color: #222222;
    color: white;
  }
</style>
