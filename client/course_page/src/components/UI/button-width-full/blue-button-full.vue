<template>
    <v-btn
      flat
      class="text-white text-none"
      color="#3d8be4"
      min-height="50px"
      max-height="50px"
      :href="href"
      :disabled="isDisabled"
      block
    >
      <slot></slot>
    </v-btn>
  </template>
  
  <script>
  export default {
    name:"BlueButtonFull",
    props:{
      href: [String],
      isDisabled: [Boolean]
    }
  };
  </script>
  
  <style scoped lang="scss"></style>
  