<template>
  <div class="about-page">
    <h1>About Page</h1>
    <p>Welcome to the About Page</p>
    <router-link to="/">
      Go to Home Page
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="less" scoped>
.about-page {
  h1 {
    color: #e74c3c;
  }
}
</style>
