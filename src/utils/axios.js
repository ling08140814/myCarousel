import axios from 'axios'

axios.defaults.timeout = 30000
axios.defaults.baseURL = 'https://v1.jinrishici.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// HTTP拦截器
axios.interceptors.request.use(
    config => {
        return config
    }, error => {
        return Promise.reject(error)
    })
axios.interceptors.response.use(
    response => {
        let data = response.data;
        if (data) {
            return response
        } else {
            return Promise.reject(response.data)
        }
    }, error => {
        return Promise.reject(error)
    })


export function httpGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}