<template>
  <div>
    <div class="mui-card" v-for="(item , i) in goodsList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner contentbox">
            <mt-switch v-model="$store.getters.getSelect[item.id]"
            @change="getChange(item.id,$store.getters.getSelect[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
                <h1>{{item.title}}</h1>
                <div>
                    <span class="price">￥{{item.sell_price}}</span>
                    <carbox class="carbox" :id="item.id" :initcount="$store.getters.getCount[item.id]"></carbox>
                    <a href="#" class="del" @click.prevent="remove(item.id , i)">删除</a>
                </div>                
            </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner pay">
           <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{$store.getters.getBuy.total}}</span> 件， 总价 <span class="red">￥{{$store.getters.getBuy.price}}</span></p>
           </div>
           <mt-button type="danger" size="normal" class="paymoney">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carbox from '../common/carbox.vue'
export default {
    data() {
        return{
            goodsList:[]
        }
    },
    components:{
        carbox
    },
    created() {
        this.getGoodslist()
    },
    methods:{
        remove(id , i) {
            //删除页面上的渲染的商品
         this.goodsList.splice(i , 1)
         //删除store仓库存储的购物车商品
         this.$store.commit('del',id)
        },
        getGoodslist() {
            let arrId = []
            this.$store.state.car.forEach(v => {
                arrId.push(v.id)
            })
            if(arrId.length <= 0) return
            this.$http.get('api/goods/getshopcarlist/' + arrId.join(','))
            .then(res => {
                // console.log(res.body.message)
                if(res.body.status === 0)  this.goodsList = res.body.message
            })
        },
        getChange(id,val) {
            let info = {id , selected:val}
            this.$store.commit('updateSelect' , info)
        }
    }
}
</script>
<style lang="less">
    .contentbox {
        display: flex;
        align-items: center;
        img {
        width: 50px;
        margin: 0 5px;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1 {
                font-size: 13px!important;
                }
            .carbox {
                height: 25px;
                margin:5px;
                }
                .price {
                    color: red;
                    font-weight: 700;
                }
                .del {
                    color: #333;
                }
        }
    }
    .pay {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red {
            color:red;
            font-weight: bold;
        }
    }
    .paymoney {
        text-align: center;
        font-size: 13px;
    }
    
</style>
