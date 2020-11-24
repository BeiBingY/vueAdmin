<template>
    <div>
        <div>
            <div class="title">单个图片上传</div>

            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

            <div>
                <img style="width: 100px;" :src="'http://127.0.0.1:414/'+img1Data.path" alt="">
            </div>
            <!-- 方案一 普通的图片上传 使用formData-->
            <input
                type="file"
                accept="image/*"
                @change="changeImage1($event)"
                ref="avatarInput"
            />
        </div>

        <div>
            <div class="title">多个个图片上传</div>
            <div>
                <img style="width: 100px;" v-for="(item, index) of imgArrData" :key="index" :src="'http://127.0.0.1:414/'+item.path" alt="">
            </div>
            <!-- 方案一 普通的图片上传 使用formData-->
            <input
                type="file"
                accept="image/*"
                multiple
                @change="changeImage($event)"
                ref="avatarInput"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            img1Data: {},
            imgArrData: []
        }
    },

    methods: {
        // 普通方案---单个上传
        changeImage1(event) {
            const formData = new FormData()
            formData.append('file', event.target.files[0])
            this.$axios.upload('/upload', formData).then(res => {
                this.img1Data = res.data.file
            }).catch(err => {
                console.log(err, 'err')
            })
        },

        // 普通方案---多个上传
        changeImage(event) {
            let files = event.target.files
            const formData = new FormData()

            for (let i = 0, length = files.length; i < length; i++) {
                formData.append('files', files[i], files[i].name)
            }

            this.$axios.upload('/upload/arr', formData).then(res => {
                this.imgArrData = res.data.files
            }).catch(err => {
                console.log(err, 'err')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>
