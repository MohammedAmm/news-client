<template>
  <div id="app">
    <TheNavigation/>
    <router-view/>
  </div>
</template>

<script>
  import TheNavigation from '@/components/TheNavigation'

  export default {
    components: {
      TheNavigation,
    }
  }
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css'
</style>