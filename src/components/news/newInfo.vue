<template>
    <div class="content">
        <h3 class="title">{{newInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newInfo.add_time | dateFormat}}</span>
            <span>点击：{{newInfo.click}}次</span>
        </p>
        <hr>
        <div v-html="newInfo.content" class="content"></div>
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import comment from '../common/comment.vue'
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newInfo:{}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id)
            .then(res => {
                res.status == 200 ? this.newInfo = res.data.message[0]:Toast('请求数据失败') 
            })
        }
    },
    components:{
        comment
    }
}
</script>
<style lang="less" scoped>
    .content {
        padding: 0 5px;
        h3 {
            margin: 15px 0;
            font-size: 16px;
            color: red;
            text-align: center;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
        }
        p {
            margin-bottom: 0!important;
        }
    }
</style>
