<template>
  <div>
    <v-container>
        <imagenes-crud></imagenes-crud>
        <Tabla></Tabla>
    </v-container>
  </div>
</template>

<script>
import ImagenesCrud from '@/components/ImagenesCrud.vue'
import Tabla from '@/components/Tabla.vue'
 
  export default {
    name: 'UsuariosCrud',
    components: {
    ImagenesCrud,
    Tabla
}
  }
</script>