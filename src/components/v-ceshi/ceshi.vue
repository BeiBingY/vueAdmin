<template>
    <div class="ceshi-body">
        <div class="tuoyuan">
            <div
                class="item"
                v-for="item of list"
                :key="item.id"
                :style="item.style"
            >{{item.content}}</div>
        </div>
    </div>
</template>

<script>
/**
* 围绕椭圆边框布局
*/
export default {
    data() {
        return {
            item: [
                {
                    id: 1,
                    content: '1'
                },
                {
                    id: 2,
                    content: '2'
                },
                {
                    id: 3,
                    content: '3'
                },
                {
                    id: 4,
                    content: '4'
                },
                {
                    id: 5,
                    content: '5'
                },
                {
                    id: 6,
                    content: '6'
                },
                {
                    id: 7,
                    content: '7'
                },
                {
                    id: 8,
                    content: '8'
                },
                {
                    id: 9,
                    content: '9'
                },
                {
                    id: 10,
                    content: '10'
                },
                {
                    id: 11,
                    content: '11'
                },
                {
                    id: 12,
                    content: '12'
                },
                {
                    id: 13,
                    content: '13'
                },
                {
                    id: 14,
                    content: '14'
                }
            ],
            list: []
        }
    },

    methods: {
        // 统计函数
        setFun(index, length) {
            let a = 75
                // 椭圆a= x半轴长

            let b = 125
                // 椭圆b= y半轴长

            let sum = length
                // 数据个数

            let jiaodu = 360 / sum
                // 根据数据个数 平分圆心

            let a2 = a * a
            let b2 = b * b
            let indexTan = (index * jiaodu - 90) * 0.017453293
            let x2 = a2 * b2 / (b2 + a2 * (Math.tan(indexTan) * Math.tan(indexTan)))
            let x = Math.sqrt(x2)
            // 计算出任意点 x点坐标

            let tan = Math.tan(indexTan)
            // 计算任意点的正切值

            let y = tan * x
            // 计算出任意点 y点坐标

            // 角度区分
            let item = index * jiaodu - 90
            let right = null
            let top = null
            // 特殊点 顺时针旋转90度
            if (item === -90) {
                right = (50 + x) + 'px'
                top = (125 + y + 20) + 'px'
            // 特殊点 0度
            } else if (item === 0) {
                right = -70 + 'px'
                top = (125 - y - 10) + 'px'
            // 特殊点 90度
            } else if (item === 90) {
                right = (50 + x) + 'px'
                top = (85 + y) + 'px'
            // 特殊点 180度
            } else if (item === 180) {
                right = 170 + 'px'
                top = (125 - y - 10) + 'px'
            // 特殊点 270度
            } else if (item === 270) {
                right = (50 + x) + 'px'
                top = (145 - y) + 'px'
            // 第一象限
            } else if (item < 90) {
                right = (5 - x) + 'px'
                top = (125 - y - 10) + 'px'
            // 第二象限
            } else if (item < 180) {
                right = (95 + x) + 'px'
                top = (125 + y - 10) + 'px'
            // 第三象限
            } else if (item < 270) {
                right = (95 + x) + 'px'
                top = (125 + y - 10) + 'px'
            // 第四象限
            } else if (item < 360) {
                right = (5 - x) + 'px'
                top = (125 - y - 10) + 'px'
            }
            return {
                style: {
                    right: right,
                    top: top
                }
            }
        }
    },

    created() {
        let item = this.item
        let list = []
        for (let i = 0, length = item.length; i < length; i++) {
            list.push({
                id: item[i].id,
                content: item[i].content,
                ...this.setFun(i, item.length)
            })
        }
        this.list = list
    }
}
</script>

<style lang="scss" scoped>
.ceshi-body {
    .tuoyuan {
        width: 150px;
        height: 250px;
        margin: 50px auto;
        background: #FFD900;
        border-radius: 50% / 50%;
        position: relative;
        .item {
            width: 50px;
            height: 20px;
            background: #ccc;
            position: absolute;
            text-align: center;
        }
    }
}
</style>
