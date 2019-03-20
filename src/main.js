// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'

//引入自定义组件SlideShow
import SlideShow from './components/SlideShow.vue'

//router配置
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)//注册
Vue.use(VueResource)

let router = new VueRouter({
	mode:"history",
	routes:[
		{//映射表
			path:'/',
			component:IndexPage//根目录,router-view承载index内容放在layout中
		}
	]

})//实例化

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },//根组件设置为layout
  template: '<Layout/>'
})
