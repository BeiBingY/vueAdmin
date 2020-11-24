import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'element-ui'
import router from '../router'
import { getToken, removeToken } from '@/utils/token'

// 响应时间
// axios.defaults.timeout = 5000
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = 'http://127.0.0.1:0414'

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // 配置token
    config.headers.Authorization = 'Bearer ' + getToken()
    return config
}, (error) => {
    // 对请求错误做些处理
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
    // 对响应数据做处理
    if (res.data.code === 401) {
        // 401 登录态失效或未登录
        MessageBox.confirm(res.data.message, '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            center: true,
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            closeOnHashChange: false,
            showCancelButton: false
        }).then(() => {
            removeToken()
            router.push({
                path: '/login'
            })
        })
        return Promise.reject(res.data)
    }
    // 判断message是否给出错误提示
    if (!res.data.message) {
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(res.data)
    }
}, (error) => {
    // 对响应错误做处理
    return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function post(url, params) {
    return new Promise((resolve, reject) => {
        // 对POST传参序列化处理 qs.stringify(params)
        axios.post(url, qs.stringify(params))
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 返回一个Promise(发送get请求)
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 返回一个Promise(发送post请求)， 用于上传图片或者文件
export function upload(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    post,
    get,
    upload
}
