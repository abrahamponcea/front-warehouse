import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#593E8D',
          secondary: '#9F63F7',
          accent: '#7749B8',
          error: '#b71c1c',
        },
      },
    },
  })

export default new Vuetify({
});
