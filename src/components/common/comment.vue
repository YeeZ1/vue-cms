<template>
  <div>
    <h3>发表评论</h3>
    <hr />
    <textarea v-model="msg" placeholder="请说出你的梦想"></textarea>
    <mt-button type="primary" size="large"  @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in commentsList" :key="item.add_time">
        <div class="cmt-title">第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === '' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageindex:1,
            commentsList:[],
            msg:''
        }
    },
    props:['id'],
    created() {
        this.getComments()
    },
    methods:{
        postComment() {
            this.$http.post('api/postcomment/' + this.id, {
                content:this.msg
            }).then(res => {
                if(res.status ==200) {
                    let newInfo = {
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg
                    }
                    this.commentsList.unshift(newInfo)
                    this.msg = ''
                }
            })
        },
        getComments() {
            this.$http.get('api/getcomments/' + this.id +'?pageindex=' + this.pageindex)
            .then(res => {
                //此处用请求回来的数组连接方法，点击更多不会覆盖之前的请求数据
                res.status == 200 ? this.commentsList = this.commentsList.concat(res.body.message) : Toast('请求数据失败')
            })
        },
        getMore() {
            this.pageindex++
            this.getComments()
        }
    }
}
</script>
<style lang="less" scoped>
textarea {
    height: 80px;
}
.cmt-list {
    margin: 10px 0;
    font-size: 13px; 
}
.cmt-body {
    padding: 10px 5px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 5px;
}
</style>
