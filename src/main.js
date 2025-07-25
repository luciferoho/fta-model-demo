import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import FtaModel from 'fta-model'
Vue.use(ElementUI)
Vue.use(FtaModel)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
