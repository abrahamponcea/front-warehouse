<template>
  <div>
      <v-navigation-drawer
        :mini-variant.sync="mini"
        permanent
        fixed
        color="primary"
      >
      <div @mouseover="mini = false" @mouseout="mini = true" >
        <v-list>
          <v-list-item>
            <v-list-item-content >
              <v-list-item-title>

                <v-icon v-if="mini" color="white" 
                style="margin-bottom: 55px; margin-top: 16px; padding: 0px">
                mdi-account
                </v-icon>
                <v-alert
                    :value="!mini"
                    text
                    color="white"
                    icon="mdi-account"
                    style="margin-bottom: 39px; "

                >
                <h3>Administrador</h3>
                </v-alert>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        <v-list-item-group color="white" >
          <v-list-item  link to="/almacen" style="margin-bottom:10px">
            <v-list-item-icon>
              <v-icon color="white">mdi-warehouse</v-icon>
            </v-list-item-icon>
            <v-list-item-title><h4 style="color:white;">Almacen</h4></v-list-item-title>
          </v-list-item >
          <v-list-item link to="/usuarios" style="margin-bottom:10px">
            <v-list-item-icon>
              <v-icon color="white">mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title><h4 style="color:white">Usuarios</h4></v-list-item-title>
          </v-list-item>
          <v-list-item link to="/compras">
            <v-list-item-icon>
              <v-icon color="white">mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title><h4 style="color:white">Compras</h4></v-list-item-title>
          </v-list-item>
          </v-list-item-group>
        </v-list>
        </div>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'BarraMenu',
    data() {
        return{
            mini: true
        }
    },
    methods: {

    }
}

</script>

<style>
  .menu
  {
    height:100vh; 
    position:relative;
  }
</style>