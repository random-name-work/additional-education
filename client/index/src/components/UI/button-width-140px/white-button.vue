<template>
  <v-btn
    flat
    class="text-none"
    variant="outlined"
    color="#3d8be4"
    min-height="40px"
    max-height="40px"
    min-width="140px"
    max-width="140px"
    :href="href"
    block
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name:"WhiteButton140",
  props:{
    href: [String]
  }
};
</script>

<style scoped lang="scss"></style>
