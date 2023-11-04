<template>
  <label class="text1">
    {{ first }}
    <input
      type="checkbox"
      @change="updateChecked(!checkboxValue)"
      v-model="checkboxValue"
    />
    <span class="search-checkbox"></span>
    {{ second }}
  </label>
</template>
<script>
export default {
  name: "checkbox-switcher",
  data() {
    return {
      checkboxValue: false,
    };
  },
  props: {
    first: [String],
    second: [String],
  },
  methods: {
    updateChecked(checkboxValue) {
      this.$emit("update:modelValue", checkboxValue);
    },
  },
  onMounted:{
    loging(){
      console.log(this.checkboxValue)
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../../styles/main.scss";
label {
  input {
    display: none;
  }
  input:checked ~ .search-checkbox::after {
    left: 19px;

    transition: 0.5s;
  }
}
.search-checkbox {
  margin-right: 43px;
  margin-left: 2px;
  position: relative;

  &::before {
    content: "";
    width: 37px;
    height: 20px;
    border-radius: 9px;
    background-color: #3d8be4;
    margin-top: 2px;
    position: absolute;
  }

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #ffffff;

    margin-top: 4px;
    left: 2px;

    position: absolute;

    transition: 0.5s;
  }
}
</style>
