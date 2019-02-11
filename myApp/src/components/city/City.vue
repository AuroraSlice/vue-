<template>
	<div class="city">
		<city-header></city-header>
		<city-hot></city-hot>
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

		

		mounted(){
			this.$http.get("/api/city.json").then((res)=>{
					console.log(res.data);
					
			})


	}
}
</script>

<style scoped>
	.city{
		background:#f5f5f5;
	}
</style>