<template>
  <div>
    <swiper :piclist="picList"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/news">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picture">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">添加商品</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">		                    
		                    <div class="mui-media-body">移动支付</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">搜索商品</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">         
		                    <div class="mui-media-body">商品列表</div></a></li>
		        </ul>
  </div>
</template>
<script>
import swiper from '../common/swiper.vue'
    export default{
        data() {
            return{
                picList:[]
            }
        },
        created() {
            this.getPicList()
        },
        components:{
            swiper
        },
        methods:{
            getPicList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo')
                .then(res => {
                    res.body.status == 0 ? this.picList = res.body.message : Toast('请求数据失败')
                    
                })
            }
        }
    };
</script>
<style scoped>
    .mint-swipe-item:nth-of-type(2n) {
        background-color: aqua;
    }
     .mint-swipe-item:nth-of-type(2n-1) {
        background-color: hotpink;
    }
    .mui-table-view.mui-grid-view  {
        background-color: #fff;
        border:0!important;
    }
    .mui-table-view-cell.mui-media  {
        width: 33.3333%;
        border:none!important;
    }
    .mui-table-view-cell.mui-media img {
        width: 60px;
    }
</style>
