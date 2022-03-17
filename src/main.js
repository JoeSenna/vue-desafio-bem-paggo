import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import Checkbox from 'primevue/checkbox';
import Button from "primevue/button";
import Textarea from 'primevue/textarea';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);

app.use(PrimeVue);
app.component("CheckBox", Checkbox);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Button", Button);
app.component("TextArea", Textarea);

app.mount('#app')
