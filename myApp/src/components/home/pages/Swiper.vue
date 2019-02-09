<template>
	<div class="header-swiper">
	<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img src="@/assets/picture/time.jpg"></swiper-slide>
    <swiper-slide><img src="@/assets/picture/time2.jpg"></swiper-slide>
    <swiper-slide><img src="@/assets/picture/time3.jpg"></swiper-slide>
    <swiper-slide><img src="@/assets/picture/time4.jpg"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
	</div>
</template>

<script>
	export default {
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
<style type="text/css" scoped lang="stylus">
	
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