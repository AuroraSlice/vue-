<template>
	<div class="header">
		<div class="headerLeft" @click="back">
			<span class="iconfont">
				&#xe624;
			</span>
		</div>
		<div class="header-title">
			城市选择
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.push("/")
			}
		}
	}
</script>

<style scoped lang="stylus">

@import '~@/assets/css/var.styl'

	.header{
		width: 100%;
		line-height: .88rem;
		background-color: #00bcd4;
		color: #fff;
		font-size: .32rem;
		position:relative;
	}

	.headerLeft{
		width: .4rem;
		padding: 0 .2rem;
		text-align: center;
		font-weight: bold;
		position:absolute;
	}

	.header-title{
		text-align:center;
	}

	
</style>