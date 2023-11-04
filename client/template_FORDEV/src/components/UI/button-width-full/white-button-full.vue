<template>
    <v-btn
      flat
      class="text-none"
      variant="outlined"
      color="#3d8be4"
      min-height="50px"
      max-height="50px"
      :disabled="isDisabled"
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
      href: [String],
      isDisabled: [Boolean]
    },
  };
  </script>
  
  <style scoped lang="scss"></style>
  