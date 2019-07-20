<template>
    <div>
         <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}}</h3>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.add_time | dateFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>	
			</ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui"
export default {
    data() {
        return {
            newsList:[]
        }
    },
    created() {
        this.getList()
    },
    methods:{
        getList() {
            this.$http.get('api/getnewslist')
            .then(res => {
                res.status == 200 ? this.newsList = res.data.message : Toast("请求数据失败")
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .mui-media-body {
        h3 {
            font-size: 16px;
        }
        .mui-ellipsis {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }
    }
</style>

