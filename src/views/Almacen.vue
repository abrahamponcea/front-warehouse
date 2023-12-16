<template>
  <div>
    <v-container>
      <ImagenesCrud></ImagenesCrud>
    </v-container>
  </div>
</template>

<script>
import ImagenesCrud from '@/components/ImagenesCrud.vue';
  

  export default {
    name: 'AlmacenCrud',

    components: {
    ImagenesCrud
    }
  }
</script>