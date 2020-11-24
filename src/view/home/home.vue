<template>
    <div>
        <!-- 普通版的图片上传，包含单个图片和多个图片 -->
        <v-upload-single></v-upload-single>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },

    components: {
        'v-upload-single': () => import('@/components/v-upload/single')
    },

    methods: {}
}
</script>

<style lang="scss" scoped>

</style>
