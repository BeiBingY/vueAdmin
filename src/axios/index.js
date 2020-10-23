import axios from 'axios'
import qs from 'qs'

// 响应时间
axios.defaults.timeout = 5000
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = 'http://node.server.com'

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // 在发送请求之前对POST传参序列化处理
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    // 对请求错误做些处理
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
    // 对响应数据做处理
    let data = {
        data: res.data,
        status: res.status
    }
    return Promise.resolve(data)
}, (error) => {
    // 对响应错误做处理
    return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function post(url, params) {
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
export default {
    post,
    get
}