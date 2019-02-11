<template>
	<div class="list">
		<div class="list-title">A</div>
		<ul class="list-msg">
			<li class="list-item">阿克苏地区</li>
			<li class="list-item">阿克苏地区</li>
			<li class="list-item">阿克苏地区</li>
			<li class="list-item">阿克苏地区</li>
			<li class="list-item">阿克苏地区</li>
			
		</ul>
	</div>
</template>

<script></script>

<style scoped>
	.list-title{
		font-size: .24rem;
		color: #212121;
		padding: .2rem .3rem;
	}

	.list-item{
		width: 25%;
		font-size: .28rem;
		text-align: center;
		line-height: .9rem;
		float: left;
		border-bottom: .02rem solid #ddd;
	}

	.list-msg{
		position: relative;
		background: #fff;
		overflow: hidden;
	}

	.list-msg:before{

		content: "";
		position: absolute;
		left: 25%;
		width: 25%;
		height: 100%;
		border-left: .02rem solid #ddd;
		border-right: .02rem solid #ddd;
	}

	.list-msg:after{

		content: "";
		position: absolute;
		left: 75%;
		width: 25%;
		height: 100%;
		border-left: .02rem solid #ddd;
		
	}
</style>