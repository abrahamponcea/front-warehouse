<template>
    <div style="width: 50vw; height: 75vh; left: 21vw; top: 13vh;
    padding-left:4vw;padding-right:4vw; padding-top: 6vh; outline: 5px solid #7749B8; border-radius: 30px; position: absolute;">
        <v-row>
            <v-col>
                <h1 style="color: #7749B8">Usuarios</h1>
            </v-col>
        </v-row>
        <v-row class="mt-1">
            <v-col cols="10">
                <p style="color: #7749B8">Todos los Usuarios</p>
            </v-col>
            <v-col>
                <v-icon color="#7749B8" size="28px" class="mb-1">mdi-filter-variant</v-icon>
            </v-col>
            <v-col>
                <v-icon color="#7749B8" size="28px" class="mb-1">mdi-plus</v-icon>
            </v-col>
            </v-row>
        <v-row class="mt-1" justify="center">
            <v-col cols="12">
                <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                        :page="pagina"
                        hide-default-footer
                        style="border-radius: 20px"
                ></v-data-table>
            </v-col>
        </v-row>
        <v-row >
          <v-col>
            <v-btn 
            @click="paginaAtras" 
            text 
            fab 
            :disabled="Prueba2()"
            class="btn-fix" 
            style="margin-left: 80%" >
              <v-icon color="primary">mdi-chevron-left</v-icon>
            </v-btn>
          </v-col>
          <v-col >
            <v-btn 
            @click="paginaAdelante" 
            text 
            fab 
            :disabled="Prueba1()"
            class="btn-fix" 
            style="margin-right: 80%" >
              <v-icon color="primary">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name:"TablaCrud",
    data: () => ({
         headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
            class: "accent white--text"
          },
          { text: 'Calories', value: 'calories', class: "accent white--text"},
          { text: 'Fat (g)', value: 'fat', class: "accent white--text" },
          { text: 'Carbs (g)', value: 'carbs', class: "accent white--text" },
          { text: 'Protein (g)', value: 'protein', class: "accent white--text" },
          { text: 'Iron (%)', value: 'iron', class: "accent white--text" },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
        pagina: 1,
        count: 0,
        paginas: 0,
        pruebadata1 : false,
        pruebadata2 : false,
    }),
    methods: {
      paginaAdelante() {
       this.pagina++;
      },
      paginaAtras(){
        this.pagina--;
      },
      Contar() {
        this.count = 0;
        for(var contar in this.desserts)
        {
          ++(this.count);
        }
        if(this.count % 5 == 0)
          this.paginas = this.count / 5;
        else
          this.paginas = (this.count / 5) + 1;
      },
      Prueba1(){
        if (this.pagina == this.paginas)
        this.pruebadata1 = true;
        else
        this.pruebadata1 = false;
        return this.pruebadata1
      },
      Prueba2(){
        if (this.pagina == 1)
        this.pruebadata2 = true;
        else
        this.pruebadata2 = false;
        return this.pruebadata2
      }
    },
    created() {
      this.Contar();
    }
}
</script>

<style>
    p{
      font-size: 18px;  
    }
    .btn-fix:focus::before { opacity: 0 !important; }
</style>
