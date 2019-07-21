<template>
    <div class="content">
        <h4 class="title">{{info.title}}</h4>
        <p class="subtitle">
            <span>发表时间:{{info.add_time | dateFormat}}</span>
            <span>点击：{{info.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <div class="thums-photo">
            <vue-preview :slides="thumsList"></vue-preview>
        </div>
        <p v-html="info.content"></p>
        <comment :id="id"></comment>
    </div>
</template>
<script>
//引入公共评论组件
import comment from '../common/comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            info:{},
            thumsList:[]
        }
    },
    components: {
        comment
    },
    created() {
        this.getInfo()
        this.getThums()
    },
    methods:{
        getThums() {
            this.$http.get('api/getthumimages/' + this.id)
            .then(res => {
                // console.log(res)
                if(res.body.status == 0) {
                    this.thumsList = res.body.message
                    this.thumsList.forEach(item => {
                        item.msrc = item.src
                        item.h = 400
                        item.w = 600
                    })
                }
            })
        },
        getInfo() {
            this.$http.get('api/getimageInfo/' + this.id)
            .then(res => {
                // console.log(res)
                if(res.body.status == 0) this.info = res.body.message[0]
            })
        }
    }
}
</script>
<style lang="less" >
.content {
    padding: 10px;
}
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:  red;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
    }
    .my-gallery {
        display: flex;
        flex-wrap:wrap;
        figure {
            margin: 5px;
            img {
                width: 100px;
            }
        }
    }
</style>
