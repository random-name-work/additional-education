<template>
    <v-btn
      flat
      class="text-none"
      variant="outlined"
      color="#3d8be4"
      min-height="50px"
      max-height="50px"
      :href="href"
      block
    >
      <slot></slot>
    </v-btn>
  </template>
  
  <script>
  export default {
    name:"WhiteButtonFull",
    props:{
      href: [String]
    }
  };
  </script>
  
  <style scoped lang="scss"></style>
  