import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 匯入 vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 匯入規則
import { required, email, min } from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'

import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: '../node_modules/@vee-validate/i18n/dist/locale/zh_TW.json' }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
// 使用 axios套件
app.use(VueAxios, axios)

app.mount('#app')
