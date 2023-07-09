<template>
  <MainAuth v-if="componentNumber === 1"
  @changeWindow="changeWindow"
  ></MainAuth>
  <PhoneAuth v-if="componentNumber === 2"
  @back="changeWindow"
  ></PhoneAuth>
  <EmailAuth v-if="componentNumber === 3"
  @back="changeWindow"
  ></EmailAuth>
</template>

<script>
import MainAuth from "./components/MainAuth.vue"
import PhoneAuth from "./components/PhoneAuth.vue";
import EmailAuth from './components/EmailAuth.vue';
export default {
  name: 'App',
  data() {
    return {
      // Main: 1; Phone: 2; Email: 3;
      componentNumber: 1
    };
  },
  components: {
    MainAuth,
    PhoneAuth,
    EmailAuth
  },
  methods:{
    changeWindow(number){
      this.componentNumber = number
    }
  }
  
}
</script>

<style lang="scss">
</style>
