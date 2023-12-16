<template>
  <v-container>
  <Login></Login>
  <ImagenesLogin></ImagenesLogin>
  </v-container>
</template>

<script>
  import Login from '../components/Login.vue'
  import ImagenesLogin from '@/components/ImagenesLogin.vue'
  

  export default {
    name: 'Home',

    components: {
    Login,
    ImagenesLogin
},
  }
</script>
