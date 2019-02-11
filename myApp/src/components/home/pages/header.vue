<template>
	<div class="header">
		<div class="headerLeft">
			<span class="iconfont">
				&#xe624;
			</span>
		</div>
		<div class="headerCenter">
			<span class="iconfont">
				&#xe632;
			</span>
			输入城市/景点/游玩主题
		</div>
		<div class="headerRight">
			<router-link to="/City"> 
				北京<span class="iconfont">
					&#xe6aa;
				</span>
			</router-link>
		</div>
	</div>
</template>

<script></script>

<style scoped lang="stylus">

@import '~@/assets/css/var.styl'

	.header{
		width: 100%;
		line-height: .88rem;
		background-color: #00bcd4;
		color: #fff;
		font-size: .36rem;
		display: flex;
	}

	.headerLeft{
		width: .4rem;
		padding: 0 .2rem;
		text-align: center;
		font-weight: bold;
	}

	.headerCenter{
		flex: 1;
		background-color: #fff;
		height: .63rem;
		margin:.14rem 0;
		border-radius: .1rem;
		color: #e4e7ea;
		line-height: .6rem;
		font-size: .28rem;
		padding-left: .2rem;
	}


	.headerRight{
		font-size: .28rem;
		padding: 0 .2rem;
	}

	.headerRight a{
		color:#fff;
	}
</style>