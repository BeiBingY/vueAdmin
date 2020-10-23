<template>
    <div class="model">
        <div class="body-div" :style="{ width: width, height: height }">
            <div class="body-div-l">
                <div class="l-t">
                    <div class="search-div">
                        <input class="search-div-input" type="text" placeholder="搜索好友">
                    </div>
                </div>
                <div class="l-list">
                    <div class="list-item" v-for="item of 10" :key="item">
                        <div class="item-l">
                            <img class="item-l-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601459338262&di=50328a77ff11e111f27783c9e4570d8c&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F01%2F20141101171342_xHRH2.jpeg" alt="">
                            <span class="total">99+</span>
                        </div>
                        <div class="item-r">
                            <div class="item-r-t">
                                <div class="name">刘维维</div>
                                <div class="time">09:29</div>
                            </div>
                            <div  class="item-r-c">您好，我是房产经纪人刘维维您好，我是房产经纪人刘维维您好，我是房产经纪人刘维维</div>
                        </div>
                    </div>
                    <div class="hint">暂无更多...</div>
                </div>
            </div>
            <div class="body-div-r">
                <div class="r-top">
                    <div class="r-t-name">刘维维</div>
                    <div class="r-t-set-div">
                        <div @click="setViewFun('min')">最小化</div>
                        <div @click="setViewFun('max')">最大化</div>
                        <div @click="setViewFun('close')">关闭</div>
                    </div>
                </div>
                <div class="r-content">
                    <div v-for="item of dialogueList" :key="item.id">
                        <div class="content-time">09:29:50</div>
                        <div class="left-content" v-if="!item.isOneself">
                            <div class="img-div margin-right">
                                <img class="content-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601459338262&di=50328a77ff11e111f27783c9e4570d8c&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F01%2F20141101171342_xHRH2.jpeg" alt="">
                            </div>
                            <div class="content-div bg-red">
                                <div v-if="item.content" class="content-text">{{item.content}}</div>
                                 <img class="content-image" v-if="item.imgUrl" :src="item.imgUrl" alt="">
                                <div class="sanjiao-left"></div>
                            </div>
                        </div>
                        <div class="right-content" v-else>
                            <div class="content-div bg-fff">
                                <div class="content-text" v-if="item.content">{{item.content}}</div>
                                <img class="content-image" v-if="item.imgUrl" :src="item.imgUrl" alt="">
                                <div class="sanjiao-right"></div>
                            </div>
                            <div class="img-div margin-left ">
                                <img class="content-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601459338262&di=50328a77ff11e111f27783c9e4570d8c&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F01%2F20141101171342_xHRH2.jpeg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="r-bottom">
                    <div class="emoji-div" v-show="isEmoji"></div>
                    <div class="operation-div">
                        <div class="operation-div-l">
                            <div @click="emojiShow">微笑</div>
                            <div>图片</div>
                            <div>会话</div>
                        </div>
                        <button class="btn" @click="send">发送</button>
                    </div>
                    <div class="textarea-div">
                        <textarea class="textarea" v-model="textareaValue"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chart',
    data () {
        return {
            textareaValue: '',
            isEmoji: false,
            width: '640px',
            height: '520px',
            dialogueList: [
                {
                    content: '你好我是小三',
                    id: 1,
                    isOneself: false
                },
                {
                    content: '三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞三哥，我是小舞',
                    id: 2,
                    isOneself: true,
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601466110877&di=1f338ac635a8dd0e856942191dc33ef6&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                },
                {
                    content: '',
                    id: 3,
                    isOneself: false,
                    imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3458299084,4005746562&fm=26&gp=0.jpg'
                },
                {
                    content: '',
                    id: 4,
                    isOneself: true,
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601466677853&di=c871714aa884b08ade2d65dffed02e24&imgtype=0&src=http%3A%2F%2Fwww.jyax.com%2Fjyaxcm%2Fsmtbklg.gif'
                }
            ]
        }
    },
    methods: {
        send() {
            console.log(this.textareaValue)
        },
        emojiShow() {
            this.isEmoji = !this.isEmoji
        },
        setViewFun(item) {
            switch (item) {
                case 'min':
                    this.width = '640px'
                    this.height = '520px'
                    break
                case 'max':
                    this.width = '100vw'
                    this.height = '100vh'
                    break
                case 'close':
                    console.log('点击了关闭，收起')
                    break
                default:
                    break
            }
        }
    }
}
</script>

<style scoped lang="scss">
.model {
    width: 100vw;
    min-width: 640px;
    height: 100vh;
    min-height: 560px;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .body-div {
        background: #fff;
        display: flex;
        font-size: 14px;
        .body-div-l {
            width: 250px;
            height: 100%;
            display: flex;
            flex-direction: column;
            .l-t {
                height: 80px;
                background: #eee;
                display: flex;
                justify-content: center;
                align-items: center;
                .search-div {
                    width: 210px;
                    height: 30px;
                    background: #fff;
                    border-radius: 15px;
                    padding: 0 15px;
                    box-sizing: border-box;
                    .search-div-input {
                        width: 100%;
                        height: 30px;
                        border: none;
                        outline: none;
                        padding: 0 2px;
                    }
                }
            }
            .l-list {
                flex: 1;
                overflow: auto;
                .list-item {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    .item-l {
                        position: relative;
                        margin-right: 10px;
                        .item-l-img {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                        }
                        .total {
                            background: red;
                            color: #fff;
                            font-size: 12px;
                            padding: 0 5px;
                            line-height: 16px;
                            border-radius: 16px;
                            position: absolute;
                            right: -5px;
                            top: -5px;
                        }
                    }
                    .item-r {
                        flex: 1;
                        .item-r-t {
                            display: flex;
                            align-items: center;
                            .name {
                                font-weight: bold;
                                flex: 1;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient: vertical;
                            }
                            .time {
                                font-size: 12px;
                                margin-left: 5px;
                                color: #999;
                            }
                        }
                        .item-r-c {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            color: #999;
                            margin-top: 5px;
                        }
                    }
                }
                .hint {
                    text-align: center;
                    color: #ccc;
                    line-height: 40px;
                    font-size: 12px;
                }
            }
        }
        .body-div-r {
            flex: 1;
            display: flex;
            flex-direction: column;
            .r-top {
                height: 79px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                .r-t-name {
                    font-size: 16px;
                    font-weight: bold;
                    flex: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
                .r-t-set-div {
                    display: flex;
                    align-items: center;
                }
            }
            .r-content {
                flex: 1;
                background: #f9f9f9;
                overflow: auto;
                .content-time {
                    text-align: center;
                    padding: 5px;
                    color: #999;
                    font-size: 12px;
                }
                .left-content {
                    display: flex;
                    padding: 10px;
                    justify-content: flex-start;
                }
                .right-content {
                    display: flex;
                    padding: 10px;
                    justify-content: flex-end;
                }
                .img-div {
                    .content-img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                }
                .margin-right {
                    margin-right: 10px;
                }
                .margin-left {
                    margin-left: 10px;
                }
                .content-div {
                    max-width: 80%;
                    padding: 5px 10px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    position: relative;
                    .content-text {
                        line-height: 24px;
                        text-align: justify;
                    }
                    .content-image {
                        max-width: 100%;
                        display: block;
                        margin: 5px 0;
                    }
                    .sanjiao-left {
                        width: 0;
                        height: 0;
                        border-top: 5px solid transparent;
                        border-right: 5px solid red;
                        border-bottom: 5px solid transparent;
                        position: absolute;
                        top: 10px;
                        left: -5px;
                    }
                    .sanjiao-right {
                        width: 0;
                        height: 0;
                        border-top: 5px solid transparent;
                        border-left: 5px solid #fff;
                        border-bottom: 5px solid transparent;
                        position: absolute;
                        top: 10px;
                        right: -5px;
                    }
                }
                .bg-red {
                    background: red;
                    color: #fff;
                    box-shadow: 0px 0px 8px rgba(240, 69, 49, 0.1);
                }
                .bg-fff {
                    background: #fff;
                    color: #000;
                    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
                }
            }
            .r-bottom {
                min-height: 100px;
                .emoji-div {
                    height: 100px;
                    background: #fff;
                    border-bottom: 1px solid #eee;
                }
                .operation-div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 10px;
                    .operation-div-l {
                        display: flex;
                    }
                    .btn {
                        width: 60px;
                        background: red;
                        color: #fff;
                        padding: 4px 0;
                        border: none;
                        outline: none;
                    }
                }
                .textarea-div {
                    height: 65px;
                    padding: 0 10px 5px 10px;
                    box-sizing: border-box;
                    .textarea {
                        width: 100%;
                        height: 50px;
                        resize: none;
                        outline: none;
                        border: none;
                        line-height: 18px;
                    }
                }
            }
        }
    }
}
</style>
