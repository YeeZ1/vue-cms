<template>
    <div>
        <input type="button" value="add" @click="add()">
        <input v-model="$store.state.num" type="text" />
    </div>
</template>

<script>
    export default {
        methods:{
            add() {
                console.log(this.$store.state.num)
                this.$store.commit('Add')
            }
        }
    }
</script>

<style  scoped>

</style>