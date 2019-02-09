<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>

</template>
<script>
	import HomeHeader from './pages/header.vue'
	import HomeSwiper from './pages/Swiper.vue'
	import HomeIcons from './pages/icons.vue'
	export default {
		components :{
			HomeHeader,
			HomeSwiper,
			HomeIcons
		}
}
		
	
</script>