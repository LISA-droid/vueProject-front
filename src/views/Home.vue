<template>
  <div class="home flex flex-col justify-center items-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Coucou"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
