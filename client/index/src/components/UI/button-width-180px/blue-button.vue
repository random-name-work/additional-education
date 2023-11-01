<template>
  <v-btn
    flat
    class="text-white text-none"
    color="#3d8be4"
    min-height="60px"
    max-height="60px"
    min-width="180px"
    max-width="180px"
    :href="href"
    block
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name:"BlueButton180",
  props:{
    href: [String]
  }
};
</script>

<style scoped lang="scss"></style>
