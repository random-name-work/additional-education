<template>
    <v-btn
      flat
      class="text-none"
      variant="outlined"
      color="#3d8be4"
      min-height="60px"
      max-height="60px"
      min-width="225px"
      max-width="225px"
      :href="href"
      block
    >
      <slot></slot>
    </v-btn>
  </template>
  
  <script>
  export default {
    name:"WhiteButton225",
    props:{
      href: [String]
    }
  };
  </script>
  
  <style scoped lang="scss"></style>
  