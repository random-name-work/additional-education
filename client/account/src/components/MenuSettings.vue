<template>
  <section class="menuSettings">
    <infoForm></infoForm>
    <contacts></contacts>
  </section>
</template>

<script>
import infoForm from "./MenuSettingsInfoForm.vue";
import contacts from "./MenuSettingsContacts.vue"
export default {
  components:{
    infoForm,
    contacts
  },
  data() {
    return {
      infoForm: false,
      familyName: "Федоров",
      familyNameRules: [],
      name: "Сергей",
      nameRules: [],
      surName: "",
      surNameRules: [],
      date: "",
      dateRules: [],
    };
  },
};
</script>

<style lang="scss">
section.menuSettings .v-form {
  // padding for separate child components (info, contacts etc)
  padding-bottom: 80px;
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section {
    max-width: 835px;
    width: 100%;

    margin-top: 30px;

    padding-top: 40px;
    padding-right: 50px;
    padding-bottom: 40px;
    padding-left: 50px;

    border-radius: 12px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>
