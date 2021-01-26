<template>
    <div>登录界面
        <el-button @click="login">点击登录</el-button>
        <v-ceshi></v-ceshi>
    </div>
</template>

<script>
import { setToken } from '@/utils/token'
export default {
    data() {
        return {
            formData: {
                user_name: '18888888883',
                user_password: '18888888883'
            }
        }
    },
    components: {
        'v-ceshi': () => import('@/components/v-ceshi/ceshi')
    },
    methods: {
        login() {
            this.$axios.post('/login', this.formData).then(res => {
                this.$message({
                    type: 'success',
                    message: '登录成功，欢迎回来'
                })
                setToken(res.data.token)
                setTimeout(() => {
                    this.$router.push({
                        path: '/home'
                    })
                }, 1500)
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: err.message || err
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
