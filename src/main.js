import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import router from './router.js'
import moment from 'moment'
//过滤器函数必须有返回值
Vue.filter('dateFormat' , (dataStr , parmas = "YYYY-MM-DD HH:MM:SS") => {
   return moment(dataStr).format(parmas)
})
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// import {Header ,Button} from 'mint-ui'
// Vue.component(Header.name , Header)
// Vue.component(Button.name , Button)
// import { Lazyload } from 'mint-ui'
// Vue.use(Lazyload)
//引入轮播图组件
// import { Swipe, SwipeItem } from "mint-ui";
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// 导入 MUI 的样式
//1  导入vuex
import Vuex from 'vuex'
//2  在vue上注册vuex
Vue.use(Vuex)
//3  创建仓储对象
//先获取本地存储的数据，如果没有就设置为空数组
let car = JSON.parse(localStorage.getItem('car') || '[]')
let store = new Vuex.Store({
   state:{
      //次配置项是存储数据
      car:car
   },
   mutations:{
      addToCar(state , goodsinfo) {
         let flag = true
         //判断是否已经添加过此商品
         state.car.some(item => {
            if(item.id == goodsinfo.id) {
               item.count += parseInt(goodsinfo.count)
               flag = false
               return true
            }
         })
         //如果没有添加商品，直接将商品信息添加到car数组中
         if(flag) {
            state.car.push(goodsinfo)
         }
         //将获取的购物车数据保存到本地存储
         localStorage.setItem('car' , JSON.stringify(state.car))
      },
      update(state , info) {
         state.car.some(v => {
            if(v.id == info.id) {
               v.count = parseInt(info.count) || 1
               localStorage.setItem('car' , JSON.stringify(state.car)) 
               return true
            }
         })
         
      },
      del(state,id) {
         // state.car.splice(id,1)
         // localStorage.setItem('car' , JSON.stringify(state.car))
         state.car.forEach((v,index) => {
            if(v.id == id) {
               state.car.splice(index,1)
               localStorage.setItem('car' , JSON.stringify(state.car)) 
               return true
            }           
         })
      },
      updateSelect(state,info) {
         state.car.some(item => {
            if(item.id == info.id) {
               item.selected = info.selected
               localStorage.setItem('car' , JSON.stringify(state.car)) 
               return true
            }

         })
      }
   },
   //getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
   getters:{
      getAll(state) {
         let total = 0
         state.car.forEach(i => {
            if(i.selected) {
               total += i.count
            }
         })

         return total
      },
      //对id 和  count 形成映射关系
      getCount(state) {
         let obj = {}
         state.car.forEach(v => {
            obj[v.id] = v.count
         })
         return obj
      },
      //对id 和  selected 形成映射关系
      getSelect(state) {
         let o = {}
         state.car.forEach(i => {
            o[i.id] = i.selected
         })
         return o
      },
      getBuy(state) {
         let o = {
            total:0,
            price:0
         }
         state.car.forEach(item => {
           if(item.selected) {
            o.total += parseInt(item.count)
            o.price += parseInt(item.price) * item.count
           } 
         })
         return o
      }
   }
})
import  './assets/mui-master/dist/css/mui.min.css'
// 导入扩展图标样式
import  './assets/mui-master/dist/css/icons-extra.css'
import app from './App.vue'

let vm = new Vue({
    el:'#app',
    render: c => c(app),
    router,
    //在vm实例上挂载store实例
    store
})