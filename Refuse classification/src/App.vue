<template>
	<div>
		<div id="app">


			<div class="input-group" style="width:300px;left:0;right:0;margin:0 auto;">
				<input type="text" v-model='$store.state.search' class="form-control" placeholder="请输入搜索内容" aria-describedby="basic-addon1">
			</div>
			<!--搜索组件-->
			<div class="list-div">
				<div v-for="(rank,i) in searchData.slice(0,6)" :key="rank.id" v-if='show'>
					<router-link :to="`/detail/details/${rank.id}`">{{rank.title}}</router-link>
				</div>
			</div>
			<!--搜索的内容-->
			<div class="list-div" style="margin-bottom:10px;">
				<div style="text-align:left;margin-bottom:10px;">近期搜索量排名：</div>
				<div v-for="(rank,i) in rubb1">
					<router-link :to="`/detail/details/${rank.id}`">{{rank.id}}、{{rank.title}}</router-link>
				</div>
			</div>
			<!--搜索排行-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default{
	data(){
		return{
			show:false,
		}
	},
	computed:{
		...mapState(['search']),
		...mapState(['rubb1']),
		...mapState(['rubb2']),
		...mapGetters(['searchData'])
	},
	methods:{
		
	},
	watch:{
		search(){
			var search = this.search;
			this.show=true;
			if(search==""){
				this.show=false;
			}
		}
	}
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-div{
	width:300px;
	margin:0 auto;
	left:0;
	right:0;
	height:120px;
}
.list-div a{
	display:block;
	height:30px;
	width:150px;
	float:left;
	text-align:left;
	text-decoration:none;
}
</style>