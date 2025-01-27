import { createApp } from 'vue'
import App from './App.vue'
import { GameStore, GameStoreKey } from './stores'

createApp(App).use(GameStore, GameStoreKey).mount('#game')
