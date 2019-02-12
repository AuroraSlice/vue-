<template>
	<div class="city">
		<city-header></city-header>
		<city-hot :City="City"></city-hot>
		<city-sort></city-sort>
		<city-list></city-list>
	</div>
</template>
<script>
	import CityHeader from './pages/Header.vue'
	import CityHot from './pages/Hot.vue'
	import CitySort from './pages/Sort.vue'
	import CityList from './pages/List.vue'
	export default{
		components:{
			CityHeader,
			CityHot,
			CitySort,
			CityList
		},
		
		data(){
			return{
				City:[]
			}
		},

		

		mounted(){
			this.$http.get("/api/city.json").then((res)=>{
					const data = res.data.data[0];
					this.City = data.City;
					
			})


	}
}
</script>

<style scoped>
	.city{
		background:#f5f5f5;
	}
</style>