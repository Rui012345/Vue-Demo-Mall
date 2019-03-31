// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailXinPin from './pages/detail/xinpin'
import DetailPinPai from './pages/detail/pinpai'
import DetailZuoPin from './pages/detail/zuopin'
import ProductPage from './pages/product'
import ProductDetails from './pages/product/pdetails'
import ProductEvaluations from './pages/product/pevaluations'
import ProductServices from './pages/product/pservices'
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
			component:IndexPage//IndexPage根目录,router-view承载index内容放在layout中
		},
		{
			path:'/product',
			component:ProductPage,
			redirect: '/product/productdetails',
						// redirect: '/detail/analysis',
			children:[
				{
					path:'productdetails',
					component:ProductDetails
				},
				{
					path:'evaluations',
					component:ProductEvaluations
				},
				{
					path:'services',
					component:ProductServices
				}

			]

		},
		{//映射表
			path:'/detail',
			component:DetailPage,
			redirect: '/detail/xinpin',
						// redirect: '/detail/analysis',
			children:[
				{
					path:'pinpai',
					component:DetailPinPai
				},
				{
					path:'zuopin',
					component:DetailZuoPin
				},
				{
					path:'xinpin',
					component:DetailXinPin
				}

			]
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
