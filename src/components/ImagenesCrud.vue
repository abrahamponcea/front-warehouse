<template>
    <div>
      <div style="position:absolute; right: 0px; bottom: 0px">
        <v-img
          src="../assets/Recursooo.png"
          max-width="42vh">
        </v-img>
      </div>
        <div style="position:absolute; right: 12vw; top: 11vh" >

          <v-btn
            icon
            x-large
            @click="expand = !expand"
          >
        <v-avatar
              color="accent"
              size="6.5vw"
        >
              <span class="white--text text-h5">RJ</span>
            </v-avatar>
        </v-btn>
        <v-expand-transition>
         <v-card v-show="expand" style="position:fixed; width:10vw; right: 7.5vw; top:17vh">
          <v-list-item-content  class="justify-center">
            <div class="mx-auto text-center">
              <h3>Roberto Jafet</h3>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Editar
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Desconectar
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
        </v-expand-transition>
        </div>
    </div>
</template>

<style>
    .logotipo{
        right: 19vw; 
        top:6.5vh; 
        position:absolute;
    }
    .circulos{
        right: 9vw; 
        top:6vh; 
        position:absolute;
    }

    .nombreapi{
        color: #593E8D;
        right: 21vw;
        top: 7.5vh;
        position:absolute;
    }
</style>

<script>
export default {
    name:"ImagenesCrud",
    data: () => ({
        expand: false
    })
}
</script>