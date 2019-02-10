<template>
	<div class="header-swiper">
	<swiper :options="swiperOption">
    
    <swiper-slide v-for="item in SwiperList" :key="item.id"><img :src="item.imgUrl">
    </swiper-slide>
   
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
	</div>
</template>

<script>
	export default {
		props:['SwiperList'],
		data() {
			return {
				
				swiperOption:{
					pagination: {
            			el: '.swiper-pagination'
         			 },
         			 loop:true
				}
		}
	}
}
</script>
<style scoped lang="stylus">
	
	.header-swiper{
		width: 100%;
		height: 2.5rem;
	}

	.header-swiper img{
		width: 100%;
		height: 2.5rem;
	}

	.header-swiper >>> .swiper-pagination-bullet-active{
		background: #fff;
	}
</style>