// 获取缓存token
export const getToken = () => {
    let token = localStorage.getItem('admin_user') ? JSON.parse(localStorage.getItem('admin_user')) : ''
    return token
}

// 设置缓存token
export const setToken = (token) => {
    localStorage.setItem('admin_user', JSON.stringify(token))
}

// 移除缓存token
export const removeToken = () => {
    localStorage.removeItem('admin_user')
}
