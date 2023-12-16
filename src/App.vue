<template>
  <v-app>
    <BarraMenu v-if="!'home'.includes($route.name)"></BarraMenu>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import BarraMenu from './components/BarraMenu.vue';


export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { BarraMenu}
};
</script>
