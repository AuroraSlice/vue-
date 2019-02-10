<template>
	<div class="like">
		<div class="like-top">

			<img src="@/../static/mock/picture/likeTop.png">
			猜你喜欢
		</div>
		<ul>
			<li class="like-item border-bottom" v-for="item in LikeList">
				<div class="like-img">
					<img :src="item.imgUrl">
				</div>

				<div class="liekText">
					<div class="likeTitle">{{item.title}}</div>
					<div class="likeMessage">{{item.msg}}</div>
					<div class="likeMap">
						<span class="likeMark">¥<b>{{item.pre}}</b>起</span>
						<span class="like-item-map">{{item.map}}</span>
					</div>
				</div>
			</li>


		</ul>
	</div>
	
</template>

<script>
	export default{
		props:['LikeList'],
		data(){
			return{ 
				
			}
		}
	}
</script>

<style scoped>
	.like{
		margin-top: .2rem;
		font-size: .28rem;
		background: #fff;
		padding: 0 .2rem;
	}

	.like-top{
		font-size: .32rem;
		padding: .2rem 0;
	}

	.like-top img{
		width: .3rem;
		height: .3rem;
	}

	.like-item{
		padding: .2rem 0;
		position: relative;
		overflow: hidden;
	}

	.like-img{
		float: left;
		overflow: hidden;
	}

	.like-img img{
		width: 2rem;
		height: 2rem;
	}

	.liekText{
		overflow: hidden;
		padding-left: .37rem; 
	}

	.likeTitle{
		font-size: .36rem;
		color: #212121;
		margin-top: .2rem;
	}

	.likeMessage{
		margin-top: .3rem;
		color: #616161;
    	font-size: .24rem;
	}

	.likeMap{
		margin-top: .3rem;
		color: #616161;
		position: relative;
	}
	.likeMark{
		color: #ff8300;
	}

	.likeMark b{
		font-size: .4rem;
	}

	.like-item-map{
		font-size: .24rem;
		position: absolute;
		right: 0;
		top:.1rem;
	}
</style>