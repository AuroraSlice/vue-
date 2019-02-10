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
		props:['iconsList'],
		data(){
			return {
				swiperOption : {},
				
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