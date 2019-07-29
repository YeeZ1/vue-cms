<template>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button" disabled>-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="initcount"  ref="count" @change="getData"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../assets/mui-master/dist/js/mui.js'
export default {
    data() {
        return{
            goodsId:0
        }
    },
     mounted() {
      mui('.mui-numbox').numbox()
  },
  watch:{
  },
  props:['initcount','id'],
  methods: {
    //通过表单change事件获取输入框的值 ,绑定ref属性可以操作dom元素，获取表单的值
    getData() {
        console.log(this.$refs.count.value)
        let info = {id:this.id , count:this.$refs.count.value}
        this.$store.commit('update' , info)
    //   this.$emit('fn' , parseInt(this.$refs.count.value))
    }
    // getNum() {
    //     let arr = JSON.parse(localStorage.getItem('car') || '[]')
    //     let that = this
    //     arr.some(v => {
    //         if(v.id == this.id) {
    //             that.goodsId = v.count
    //             return true
    //         }
    //     })
    // }
  },
};
</script>

<style lang="less" scoped>
</style>