<template>
  <div>
        <!-- 顶部 Header 区域 -->
    <mt-header fixed title="Vue 项目 玩淘宝"></mt-header>
    <div class="container">
          <!-- 中间的 路由 router-view 区域 -->
          <transition>      
            <router-view></router-view>
          </transition>
    </div>
      <!-- 底部 TabBar 区域 -->
    <nav class="mui-bar mui-bar-tab">
    		<router-link to="/home" class="mui-tab-item6">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
      	</router-link>
      	<router-link to="/member" class="mui-tab-item6">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
      	</router-link>
      	<router-link to="/shopcar" class="mui-tab-item6">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">0</span>
          </span>
          <span class="mui-tab-label">购物车</span>
      	</router-link>
      	<router-link to="/search" class="mui-tab-item6">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
      	</router-link>
    </nav>
  </div>
</template>
<script>
    // import mui from './assets/mui-master/dist/js/mui.js'
    // export default {
    //   mui('nav , header').on('tap','a',function(){
    //     window.top.location.href=this.href;
    // })
    // }
</script>
<style scoped>
  .container {
    padding-top: 40px;
    padding-bottom: 50px;
    /* 解决tab栏闪烁问题 */
    overflow-x: hidden;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%)
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    /* 给进来的内容定位，解决盒子被挤下去 */
    position: absolute;
  }
  .v-leave-active,
  .v-enter-active {
    transition: all .6s ease;
  }
  .mui-bar-tab .mui-tab-item6.mui-active {
    color: #007aff;
}
/* 解决mui中的类名与mui-js中的类名冲突，修改类名 */
.mui-bar-tab .mui-tab-item6 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item6 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item6 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
