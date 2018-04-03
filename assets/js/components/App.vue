<template>
  <div>

    <nav class="site-nav-secondary sticky">
      <ul>
        <li><router-link to="/" class="usa-current">Home</router-link></li>
        <li><router-link to="/ServiceList">Services</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style scoped>
  p {
    background-color: #eee;
  }
</style>
