import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import news from './components/news/news.vue'
import newInfo from './components/news/newInfo.vue'
import picture from './components/picture/picture.vue'
import photoInfo from './components/picture/photoInfo.vue'
import goodslist from './components/goods/goodslist.vue'
export default  new VueRouter({
    routes:[{path:'/' , redirect:'/home'},
            {path:'/home' , component:home},
            {path:'/member' , component:member},
            {path:'/shopcar' , component:shopcar},
            {path:'/search' , component:search},
            {path:'/home/news' , component:news},
            {path:'/home/newInfo/:id' , component:newInfo},
            {path:'/home/picture' , component:picture},
            {path:'/home/photoInfo/:id' , component:photoInfo},
            {path:'/home/goodslist' , component:goodslist}],
    linkActiveClass:"mui-active"
})
