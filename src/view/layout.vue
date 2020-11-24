<template>
    <el-container class="layout">
        <el-header>
            <!-- 头部内容 -->
            <v-header></v-header>
        </el-header>
        <el-container>
            <el-aside>
                <!-- 侧边栏内容 -->
                <v-aside></v-aside>
            </el-aside>
            <el-main>
                <!-- 主体内容 -->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    components: {
        'v-header': () => import('@/components/v-header/header'),
        'v-aside': () => import('@/components/v-aside/aside')
    }
}
</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100vh;
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        height: calc(100vh - 60px);
        overflow: auto;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        height: calc(100vh - 60px);
        overflow: auto;
    }
}
</style>
