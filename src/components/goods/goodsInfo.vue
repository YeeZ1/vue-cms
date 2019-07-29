<template>
  <div class="goodsContainer">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div class="ball" v-show="flag" ref="ball"></div>      
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :piclist="piclist"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
                市场价:<span class="old">￥{{goodsInfo.market_price}}</span> &nbsp;&nbsp;
                销售价:<b class="now">￥{{goodsInfo.sell_price}}</b>
            </p>
            <!-- 子组件在获取父元素绑定的属性值是异步请求回来的值，子组件在得到这个值的时候，异步请求的结果可能没有回来 -->
            <p> 购买数量：<numbox @fn="getCount" class="count" :max="goodsInfo.stock_quantity"></numbox></p>
            <p>
                <mt-button type="primary" size="normal">立即购买</mt-button>
                <mt-button type="danger" size="normal" @click="clickflag && addcar()">加入购物车</mt-button>
            </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            商品货号：{{goodsInfo.goods_no}}
          </p>
          <p>
            库存情况：{{goodsInfo.stock_quantity}}件
          </p>
          <p>
            上架时间：{{goodsInfo.add_time | dateFormat}}
          </p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="getDes(goodsInfo.id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="getCom(goodsInfo.id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../common/numbox.vue'
import swiper from "../common/swiper.vue"
export default {
  data() {
    return {
      flag:false,
      clickflag:true,
      id: this.$route.params.id,
      piclist: [],
      goodsInfo:{},
      buyCount:1
    };
  },
  created() {
    this.getImg()
    this.getInfo()
  },
 
  components: {
    swiper,
    numbox
  },
  methods: {
    getCount(data) {
      if(data > this.goodsInfo.stock_quantity) {
        return this.buyCount = this.goodsInfo.stock_quantity
      }
      this.buyCount = data
      console.log('这是子组件里面的数值：' + this.buyCount)
    },
    addcar() {
      this.flag = true
      let goodsinfo = {id:this.id , count: this.buyCount , price:this.goodsInfo.sell_price , selected:true}
      this.$store.commit('addToCar' , goodsinfo)
    },
    beforeEnter(el){
      el.style.opacity = 1
      el.style.transform = "translate(0,0)"
    },
    enter(el , done) {
      this.clickflag = false
      el.offsetWidth
      //获取小球的起始位置
      let ballPos = this.$refs.ball.getBoundingClientRect()
      //获取目标位置
      let badgePos = document.getElementById('badge').getBoundingClientRect()
      let absX = badgePos.left - ballPos.left
      let absY = badgePos.top - ballPos.top
      el.style.transform = `translate(${absX}px,${absY}px)`
      el.style.transition = "all .7s ease"
      done()
    },
    afterEnter(el) {
      this.flag = !this.flag
    },
    afterLeave(el) {
      this.clickflag = true
    },
    getImg() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status === 0) this.piclist = res.body.message;
        this.piclist.forEach(item => {
          item.img = item.src;
        })
      })
    },
    getInfo() {
      this.$http.get('api/goods/getinfo/' + this.id)
      .then(res => {
        if(res.body.status === 0) this.goodsInfo = res.body.message[0]
        console.log(this.goodsInfo);
        
      })
    },
    getDes(id) {
      this.$router.push({name:'goodsdes' , params:{id}})
    },
    getCom(id) {
      this.$router.push({name:'goodscom' , params:{id}})
    }
  }
};
</script>

<style scoped lang="less">
.content {
  background-color: #eee;
}
.count {
  display: inline-block;
}
.old {
    text-decoration: line-through;
  }
 .now {
    color: red;
  }
 .mui-card-footer {
    display: block;
     button {
      margin: 15px 0;
    }
  }
  .ball {
    position: absolute;
    top:407px;
    left: 148px;
    z-index: 999;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
  }
</style>