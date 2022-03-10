import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseCard from './components/ui/BaseCard.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseDialog from './components/ui/BaseDialog.vue'

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.mount('#app')
