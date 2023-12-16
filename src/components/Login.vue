<template>
    <div class="cuadroLogin">
        <v-btn
            color="primary"
            :text = "!boleanValue"
            :plain = "boleanValue"
            height="50px"
            @click = "cambio2"
            style = "margin-left: 4rem; margin-top: 40px;"
            
        >
            <h3 >Iniciar Sesion</h3>
        </v-btn>
        <v-btn
            color="primary"
            :text = "boleanValue"
            :plain = "!boleanValue"
            height="50px"
            @click = "cambio1"
            style = "margin-left: 1.5rem; margin-top: 40px;"
      >
        <h3>Crear Sesion</h3>
      </v-btn>

    <v-form v-if="!boleanValue">
      <v-row>
        <v-text-field
                label="Username"
                prepend-icon="mdi-account"
                outlined
                rounded
                dense
                height="43px"
                style="margin-left: 55px; margin-top:45px; margin-right: 5rem;"
                
              ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                outlined
                rounded
                dense
                height="43px"
                style="margin-left: 55px; margin-right: 5rem; margin-top: 10px"
              ></v-text-field>
      </v-row>
      <v-row>
        <v-container>
          <v-btn 
            style="margin-left: 37%;" 
            color="primary"
            large
            rounded
            height="50px"
            href="/almacen"
          >Iniciar Sesion</v-btn>
        </v-container>
      </v-row>
    </v-form>

    <v-form v-if="boleanValue">
      <v-row>
        <v-text-field
                label="Username"
                prepend-icon="mdi-account"
                outlined
                rounded
                dense
                height="43px"
                style="margin-left: 55px; margin-top:45px; margin-right: 5rem;"
                
              ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
                label="Password"
                prepend-icon="mdi-lock "
                outlined
                rounded
                dense
                height="43px"
                style="margin-left: 55px; margin-right: 5rem; margin-top: 10px"
              ></v-text-field>
      </v-row>
      <v-row>
        <v-container>
          <v-btn 
            style="margin-left: 37%;"
            color="primary"
            large
            rounded
            height="50px"
          >Crear Sesion</v-btn>
        </v-container>
        
      </v-row>
    </v-form>
  </div>

</template>

<style>
h3 {
  font-size: 18px;
}

.cuadroLogin{
    width: 70vh;
    height: 55vh;
    margin-left: 0%;
    margin-top: 18%;
    outline: solid #593E8D;
    border-radius: 30px;
}

.cuadroLogin2{
    width: 100vh;
    height: 70vh;
    margin-left: 20vh; 
    margin-top: 30vh;
    outline: solid;
    border-radius: 30px;
}

.v-text-field label{
    font-size: 17px;
}
.v-text-field .v-icon{
    font-size:30px;
}

</style>

<script>
export default {
    name:"Login",
    data: () => ({
        boleanValue:  false,
        boleanValue2: false
     }),

    methods: {
        cambio1(){
            this.boleanValue = true
        },
        cambio2(){
            this.boleanValue = false
        }
    },
}
</script>

