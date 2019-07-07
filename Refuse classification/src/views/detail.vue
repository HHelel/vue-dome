<template>
	<div>
		<div class="list-div">
			<div><span style="font-size:16px;color:#000;">垃圾分类 : </span>{{messageDetail.title}}</div>
			<br>
			<div style="color:#000;"><span style="font-size:18px;">详情 :</span>{{messageDetail.content}}</div>
		</div>
	</div>
</template>


<script>
export default{
	data(){
		return{
			messageDetail:{}
		}
	},
	mounted(){
		setTimeout(() => {
			const allMessageDetails=[
				{
					id:1,
					title:'剩饭剩菜属于湿垃圾',
					content:'是指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等生物质生活废弃物。湿垃圾的投放中，纯流质的食物垃圾，如牛奶等，应直接倒进下水口；有包装的湿垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物或干垃圾容器。'
				},
				{
					id:2,
					title:'旧衣服属于可回收垃圾',
					content:'旧衣服属于可回收垃圾。可回收垃圾又主要包括废纸、塑料、玻璃、金属和布料五大类，旧衣服就属于布料类。布料类垃圾主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。通过综合处理回收利用，可以减少污染，节省资源。'
				},
				{
					id:3,
					title:'过期的药品属于有害垃圾',
					content:'根据《国家危险废物名录》，生产、销售及使用过程中产生的过期失效的药品属于危险废物。与一般废弃物不同，危险废物危害更大，随意排放、贮存的危废，在雨水地下水的长期渗透、扩散作用下，会污染水体和土壤，进而影响人类健康。'
				},
				{
					id:4,
					title:'废旧的家电属于可回收物',
					content:'废旧的电器对人体是有害的。因为废旧电器中含有对中化学成分，丢弃在一起毁于空气中的氧气反应，产生多种有害气体，短时间内对人体危害不大，但长期以往会对人体产生危害。建议；远离这些废旧电器。希望对您有所帮助。'
				},
				{
					id:5,
					title:'前男友不属于垃圾',
					content:'。。。。'
				},
				{
					id:6,
					title:'快递包装盒是可回收垃圾',
					content:'快递的包装主要是纸质和塑料两大类，按照上海市垃圾分类的原则，都属于可回收垃圾，这些垃圾都是具有再利用价值的，建议市民做好分类。'
				}
			]
			this.allMessageDetails=allMessageDetails   //重新赋值
			const id = this.$route.params.id*1		   //获取点击的链接对应 的id值
			this.messageDetail = allMessageDetails.find(detail => detail.id===id)    //获取id值对应的那条数据，并赋值给data数据
			//find(detail => true)
			//查找满足条件中的某一个(id一致)
		},1000)
	},
	watch:{
		$route:function(value){   //路由链接param发生了改变
			const id = value.params.id*1
			this.messageDetail =this.allMessageDetails.find(detail => detail.id===id)
		}
	}
}
</script>


<style>
.list-div{
	width:300px;
	margin:0 auto;
	left:0;
	right:0;
	height:120px;
}
</style>