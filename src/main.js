import { createApp } from 'vue'
import App from './App.vue'
//import App from './components/TestComponent.vue'
import router from './router'

// <-- styling -->
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// <-- fontawesome -->
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
//

loadFonts()
library.add(fas);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .mount('#app')