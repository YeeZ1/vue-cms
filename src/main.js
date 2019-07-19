import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
import router from './router.js'
import {Header} from 'mint-ui'
Vue.component(Header.name , Header)
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