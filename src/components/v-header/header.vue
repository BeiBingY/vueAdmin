<template>
    <div class="v-header">
        <el-button @click="loginOut">退出登录</el-button>
    </div>
</template>

<script>
import { removeToken } from '@/utils/token'
export default {
    methods: {
        loginOut() {
            removeToken()
            this.$router.push({path: '/login'})
        }
    }
}
</script>

<style lang="scss" scoped>
.v-header {

}
</style>
