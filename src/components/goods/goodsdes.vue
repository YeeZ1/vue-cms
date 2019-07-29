<template>
    <div class="goodsdes">
        <h3 class="title1">{{goodsDes.title}}</h3>
        <hr>
        <p v-html="goodsDes.content" class="des"></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:this.$route.params.id,
                goodsDes:{}
            }
        },
        created() {
            this.getDes()
        },
        methods:{
            getDes() {
                this.$http.get('api/goods/getdesc/' + this.id)
                .then(res => {
                    if(res.body.status === 0) this.goodsDes = res.body.message[0]
                })
            }
        }
    }
</script>

<style >
    .goodsdes{
        padding: 5px;
    }
    .title1 {
        font-size: 16px;
        margin: 10px 0;
    }
    .des img {
        width: 100%;
    }
</style>