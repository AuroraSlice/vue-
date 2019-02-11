<template>
	<div class="hot">
		<div class="hot-title">热门城市</div>
		<ul class="hot-list">
			<li class="hot-item">北京</li>
			<li class="hot-item">上海</li>
			<li class="hot-item">三亚</li>
			<li class="hot-item">武汉</li>
			<li class="hot-item">南京</li>
			<li class="hot-item">西安</li>
			<li class="hot-item">海南</li>
			<li class="hot-item">广州</li>
			<li class="hot-item">桂林</li>
			<li class="hot-item">厦门</li>
			<li class="hot-item">杭州</li>
			<li class="hot-item">南昌</li>
		</ul>
	</div>
</template>

<script></script>

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