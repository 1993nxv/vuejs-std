<template>
  <div>
      <BaseAlert
          v-if="showAlert"
          :variant="variant"
          @close="onClose()"
      >
          {{ text }}
      </BaseAlert>
  </div>
</template>

<script>
import BaseAlert from '@/components/BaseAlert';
export default {
  name: 'App',
  components: { BaseAlert },
  data() {
      return {
          showAlert: true,
          variant: 'danger',
          text: 'Seu formulário não foi enviado'
      }
  },
  beforeUpdate() {},
  updated() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    onClose(){
      console.log('on close')
      return this.showAlert = false
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>