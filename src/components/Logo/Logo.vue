<template>
  <img class="logo" src="../../assets/img/hp-logo.png" alt="Logo" />
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  width: auto;
  height: 100px;
  line-height: 90px;
  text-align: center;
}
a {
  text-decoration: none;
  color: #fff;
}

@media screen and (max-width: 450px) {
  .logo {
    height: 50px;
  }
}

@media screen and (max-width: 380px) {
  .logo {
    height: 50px;
  }
}

@media screen and (max-width: 360px) {
  .logo {
    height: 50px;
  }
  a {
    font-size: 18px;
  }
}
</style>
