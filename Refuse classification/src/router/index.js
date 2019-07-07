import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Detail from '../views/detail'


import 'bootstrap/dist/css/bootstrap.min.css'


//这个index.js是路由器模块
Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/detail',
			component:Detail,
			children:[
				{
					path:'/detail/details/:id',
					component:Detail
				}
			]
		}
	]
})
//配置路由




//基本路由步骤:
//1.在views文件夹中新建组件
//2.在index.js中添加组件和路由地址