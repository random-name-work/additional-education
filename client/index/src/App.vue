<template>
  <div>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style scoped lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>
