import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faEdit, faTrashAlt, faCheck, faTimes);

const app = createApp(App);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
