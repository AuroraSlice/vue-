<template>
	<div>
		<home-header></home-header>
		<home-swiper :SwiperList = 'SwiperList'></home-swiper>
		<home-icons :iconsList = "iconsList"></home-icons>
		<home-local></home-local>
		<home-activity :HotList = "HotList"></home-activity>
		<home-like :LikeList="LikeList"></home-like>
	</div>

</template>
<script>
	import HomeHeader from './pages/header.vue'
	import HomeSwiper from './pages/Swiper.vue'
	import HomeIcons from './pages/icons.vue'
	import HomeLocal from './pages/Local.vue'
	import HomeActivity from './pages/activity.vue'
	import HomeLike from './pages/like.vue'
	export default {
		components :{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeLocal,
			HomeActivity,
			HomeLike
		},
		data(){
			return{
				SwiperList:[],
				iconsList:[],
				HotList:[],
				LikeList:[]
			}
		},

		mounted(){
			this.$http.get("http://localhost:8080/static/mock/dataHome.json").then((res)=>{
					const data  = res.data.data[0];
					this.SwiperList = data.SwiperList;
					this.iconsList = data.iconsList;
					this.HotList = data.HotList;
					this.LikeList = data.LikeList;
					console.log(this.iconsList);
					
			})
		}
}
		
	
</script>