<template>
    <div class="goodslist">
        <div class="goodsitem">
            <img src="https://res.vmallres.com/pimages//product/6901443293513/428_428_1555464685019mp.png" alt="华为P30">
            <h4>HUAWEI P30 Pro 麒麟980 超感光徕卡四摄 屏内指纹 双景录像</h4>
            <p class="price">
                <span class="now">￥4666</span>
                <span class="old">￥5666</span>
            </p>
            <p class="sell">
                <span class="hot">热卖中</span>
                <span class="num">剩余666件</span>
            </p>
        </div>
        <div class="goodsitem">
            <img src="https://res.vmallres.com/pimages//product/6901443293513/428_428_1555464685019mp.png" alt="华为P30">
            <h4>HUAWEI P30 Pro 麒麟980 超感光徕卡四摄</h4>
            <p class="price">
                <span class="now">￥4666</span>
                <span class="old">￥5666</span>
            </p>
            <p class="sell">
                <span class="hot">热卖中</span>
                <span class="num">剩余666件</span>
            </p>
        </div>
        <div class="goodsitem">
            <img src="https://res.vmallres.com/pimages//product/6901443293513/428_428_1555464685019mp.png" alt="华为P30">
            <h4>HUAWEI P30 Pro 麒麟980 超感光徕卡四摄 屏内指纹 双景录像</h4>
            <p class="price">
                <span class="now">￥4666</span>
                <span class="old">￥5666</span>
            </p>
            <p class="sell">
                <span class="hot">热卖中</span>
                <span class="num">剩余666件</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
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
