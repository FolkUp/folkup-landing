import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './assets/main.css'

const routes = [
  { path: '/', component: () => import('./pages/index.vue') },
  { path: '/privacy', component: () => import('./pages/privacy.vue') },
  { path: '/terms', component: () => import('./pages/terms.vue') },
  { path: '/cookies', component: () => import('./pages/cookies.vue') },
]

export const createApp = ViteSSG(App, { routes })
