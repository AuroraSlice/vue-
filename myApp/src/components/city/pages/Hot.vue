<template>
	<div class="hot">
		<div class="hot-title">热门城市</div>
		<ul class="hot-list" >
			<li class="hot-item" v-for="item in City" :key="item.id">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:["City"]
	}

	
</script>

<style scoped>
	.hot-title{
		font-size: .24rem;
		color: #212121;
		padding: .2rem .3rem;
	}

	.hot-list{
		position: relative;
		background: #fff;
		font-size: .28rem;
		overflow: hidden;
		color: #212121;
	}

	.hot-list:before{
		content: "";
		position: absolute;
		width: 33.33333%;
		height: 100%;
		left: 33.33333%;
		border-left: .02rem solid #ddd;
		border-right: .02rem solid #ddd;
	}
	.hot-item{
		width: 33.333333%;
		text-align: center;
		height: .9rem;
		line-height: .9rem;
		float: left;
		border-bottom: .02rem solid #ddd;

	}
</style>