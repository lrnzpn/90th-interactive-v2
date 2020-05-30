<template lang="pug">
  
</template>

<script>
export default {
  name: "RedirectHome",
  created() {
    console.log(window.location.pathname + " does not exist.");
    window.location.href = "/";
  }
};
</script>

<style lang="scss" scoped>
</style>