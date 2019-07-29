<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button" disabled>-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1"  ref="count" @change="getData"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../assets/mui-master/dist/js/mui.js'
export default {
     mounted() {
      mui('.mui-numbox').numbox()
      console.log(this.max)
  },
  props:['max'],
  watch:{
    //通过事件监听max值的改变，mui文档手动设置最大值
    max:function(newVal , oldVal) {
      //使用JS中的API设置numbox最大值
      mui('.mui-numbox').numbox().setOption('max',newVal)
    }
  },
  methods: {
    //通过表单change事件获取输入框的值 ,绑定ref属性可以操作dom元素，获取表单的值
    getData() {
      // console.log(this);
      this.$emit('fn' , parseInt(this.$refs.count.value))
    }
  },
};
</script>

<style lang="less" scoped>
  .mui-numbox {
    display:inline-block;
  }
</style>