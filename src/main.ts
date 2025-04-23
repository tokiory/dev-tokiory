import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import "@fontsource-variable/manrope"
import "@unocss/reset/tailwind.css"
import 'virtual:uno.css'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
