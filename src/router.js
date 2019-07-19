import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
export default  new VueRouter({
    routes:[{path:'/' , redirect:'/home'},
            {path:'/home' , component:home},
            {path:'/member' , component:member},
            {path:'/shopcar' , component:shopcar},
            {path:'/search' , component:search}],
    linkActiveClass:"mui-active"
})
