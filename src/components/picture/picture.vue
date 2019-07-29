<template>
    <div>
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0? 'mui-active':'']" @click="getPhotos(item.id)" data-wid="tab-top-subpage-1.html" v-for="item in cateList" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>
		</div>
		<ul class="photos">
			<!-- 将li修改成路由链接，并设置tag属性为li，因为css样式写了li的样式，哈希地址需要将当前图片id传递过去，绑定属性 -->
  			<router-link :to="'/home/photoInfo/' + item.id" v-for="item in photoList" :key="item.id" tag="li">
    			<img v-lazy="item.img_url">
				<div class="info">
					<p class="title">
					{{item.title}}
				</p>
				<p class="detail">
					{{item.zhaiyao}}
				</p>
				</div>
  			</router-link>
		</ul>
    </div>
</template>
<script>
import mui from '../../assets/mui-master/dist/js/mui.js'
export default {
	data() {
		return {
			cateList:[],
			photoList:[]
		}
	},
	created() {
		this.getCateList()
		this.getPhotos(0)
	},
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
    },
	methods:{
		getPhotos(id) {
			this.$http.get('api/getimages/' + id)
			.then( res => {
				if(res.body.status == 0) this.photoList = res.body.message
			})
		},
		getCateList() {
			this.$http.get('api/getimgcategory')
			.then(res => {
				// console.log(res.body);
				if(res.body.status === 0) {
					let all = {
						title:'全部',
						id:0
					}
					res.body.message.unshift(all)
					this.cateList = res.body.message
				}
			})
		}
	}
}
</script>
<style lang="less" scoped>
    * {
        touch-action: pan-y;
	}
	.photos {
		padding: 10px 10px 0 10px;
		background-color: #fff;
		li {
			position: relative;
			list-style: none;
			margin-bottom: 10px;
			background-color: #f3f3f3;
			box-shadow: #ccc 0px 0px 10px;
			.info {
				position: absolute;
				overflow: hidden;
				color: #fff;
				bottom: 0;
				max-height: 85px;
				background: rgba(0, 0, 0, .3)
			}
			p.title {
				color: #fff;
				font-size: 14px;
				margin: 0 ;
				text-align: left;
			}
			p.detail {
				color: #fff;
				font-size: 13px;
			}
			img {
			width: 100%;
			vertical-align: top;
		}
		img[lazy=loading] {
			width: 40px;
			height: 600px;
  			margin: auto;
		}
	}
}
	
	
</style>
