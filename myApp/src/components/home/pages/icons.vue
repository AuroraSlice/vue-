<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for='(item,key) in page' :key="key">
				<div class="icons-item" v-for='page in item' :key="page.id">
			<img :src="page.imgUrl">
			<p>{{page.title}}</p>
		</div>
			</swiper-slide>
		</swiper>
		

	</div>
</template>

<script>
	export default{
		data(){
			return {
				swiperOption : {},
				iconsList :[
	
					{
						id:"01",
						imgUrl:require("@/assets/picture/icon1.png"),
						title:"景点门票"
					},
					{
						id:"02",
						imgUrl:require("@/assets/picture/icon2.png"),
						title:"必游榜单"
					},
					{
						id:"03",
						imgUrl:require("@/assets/picture/icon3.png"),
						title:"本地玩乐"
					},
					{
						id:"04",
						imgUrl:require("@/assets/picture/icon4.png"),
						title:"机票酒店"
					},
					{
						id:"05",
						imgUrl:require("@/assets/picture/icon5.png"),
						title:"国外签证"
					},
					{
						id:"06",
						imgUrl:require("@/assets/picture/icon6.png"),
						title:"著名景点"
					},
					{
						id:"07",
						imgUrl:require("@/assets/picture/icon7.png"),
						title:"当地景点"
					},
					{
						id:"08",
						imgUrl:require("@/assets/picture/icon8.png"),
						title:"门票信息"
					},
					{
						id:"09",
						imgUrl:require("@/assets/picture/icon9.png"),
						title:"更多游玩"
					}
					
				]
			}
		},
		computed : {
			page () {
				let pages = [];
				this.iconsList.forEach((item,index)=>{
					let idx = Math.floor(index/8);
					if(!pages[idx]) pages[idx] = [];
					pages[idx].push(item)
				})

				return pages;
			}
		}
	}
</script>
<style scoped>
	.icons-item{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		float: left;
		
	}

	.icons-item img{
		width: 1.1rem;
		height: 1.1rem;
		display: block;
		margin: 0 auto;
		padding-top: .2rem; 
	}

	.icons-item p{
		margin-top: .1rem;
		font-size: .28rem;
		text-align: center;
		color: #212121;
	}
</style>