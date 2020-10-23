<template>
    <div>首页</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.$axios.post('/login').then(res => {
            console.log(res, '请求成功')
        }).catch(err => {
            console.log(err.code, '请求失败')
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
