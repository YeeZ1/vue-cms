<template>
    <div class="goodslist">
        <div class="goodsitem"  v-for="item in goodsList" :key="item.id" @click="link(item.id)">
            <img :src="item.img_url" alt="华为P30">
            <h4>{{item.title}}</h4>
            <p class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span class="hot">热卖中</span>
                <span class="num">剩余{{item.stock_quantity}}件</span>
            </p>
        </div>
        <mt-button type="danger" size="large" @click="getMore" v-show="flag">加载更多</mt-button>
    </div>
</template>
<script>
export default{
    data() {
        return {
            goodsList:[],
            pageindex:1,
            flag:true
        }
    },
    created() {
        this.getGoodsList()
    },
    methods:{
        getGoodsList() {
            this.$http.get(`api/getgoods?pageindex=${this.pageindex}`)
            .then(res => {
                // console.log(res.body.message)
                if(res.body.status === 0) this.goodsList = this.goodsList.concat(res.body.message)
                if(this.goodsList.length < this.pageindex*10) this.flag = false
            })
        },
        getMore() {
            this.pageindex++
            this.getGoodsList()
        },
        link(id) {
            console.log(this);
            
            //$route是操作url地址栏的路由请求路径
            //$router是路由对象，可以使用各种方法，push方法可以发送路由请求路径
            // this.$router.push(`goodsInfo/${id}`)
            this.$router.push({name:'goodsinfo' , params:{id}})
        }
    }
}
</script>
<style lang="less">
    .goodslist{
        display: flex;
        padding: 8px;
        flex-wrap: wrap;
        justify-content: space-between;
        .goodsitem {
            display: flex;
            overflow: hidden;
            justify-content: space-between;
            flex-direction: column;
            min-height: 323px;
            width: 49%;
            margin-bottom: 10px;
            border-radius: 6px;
            box-shadow: 0 0 8px #999;
            img {
                padding: 15px 0;
                width: 100%;
                background-color: #fff;
            }
            h4 {
                padding: 5px 5px 0;   
                font-size: 16px;
                font-weight: 400;
            }
            p {
                padding: 0 5px;
                margin:0;
            }
            .price {
                margin:3px 0;
                .now {
                    font-size: 15px;
                    font-weight: 700;
                    color: red;
                }
                .old {
                    margin-left: 10px;
                    font-size: 12px;
                    text-decoration: line-through;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                padding-bottom: 5px;
            }
        }
    }
</style>
