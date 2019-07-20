import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
import router from './router.js'
import moment from 'moment'
//过滤器函数必须有返回值
Vue.filter('dateFormat' , (dataStr , parmas = "YYYY-MM-DD HH:MM:SS") => {
   return moment(dataStr).format(parmas)
})
import {Header ,Button} from 'mint-ui'
Vue.component(Header.name , Header)
Vue.component(Button.name , Button)
//引入轮播图组件
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入 MUI 的样式
import  './assets/mui-master/dist/css/mui.min.css'
// 导入扩展图标样式
import  './assets/mui-master/dist/css/icons-extra.css'
import app from './App.vue'

let vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})