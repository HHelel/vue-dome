//vue核心管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	search:'',
	rubb1:[        //搜索量排名
		{
			id:1,
			title:'剩饭剩菜'
		},
		{
			id:2,
			title:'旧衣服'
		},
		{
			id:3,
			title:'过期的药'
		},
		{
			id:4,
			title:'废旧的家电'
		},
		{
			id:5,
			title:'前男友'
		},
		{
			id:6,
			title:'快递包装盒'
		}
	],
	rubb2:[			//可搜索内容
		{
			id:1,
			title:'剩饭剩菜'
		},
		{
			id:2,
			title:'旧衣服'
		},
		{
			id:3,
			title:'过期的药片'
		},
		{
			id:4,
			title:'废旧的家电'
		},
		{
			id:5,
			title:'前男友'
		},
		{
			id:6,
			title:'快递包装盒'
		}
	]
}

const mutations = {
	
}

const actions = {
	
}

const getters = {
	searchData:function(state){
		var search = state.search;
		
		if (search) {
			
			return state.rubb2.filter(function(product) {
				return Object.keys(product).some(function(key) {
					return String(product[key]).toLowerCase().indexOf(search) > -1
				})
			});

		}
		return state.rubb2;
	}
}


export default new Vuex.Store({
	state,//状态
	mutations,//包含多个更新state函数的对象
	actions,//包含多个对应事件回调函数的对象
	getters//包含多个getter计算属性函数的对象
})

