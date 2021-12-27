import axios from 'axios'
// import { getToken } from '@/utils/auth'
// import store from '@/stores'
const DEFAULT_API_URI = 'https://api.opensea.io/api/v1'
const DEFAULT_TIMEOUT = 30000

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_API_URI || DEFAULT_API_URI,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: DEFAULT_TIMEOUT
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (store.getters['user/token']) {
    //   config.headers['x-access-token'] = getToken()
    // }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // 沒有錯誤規範，直接返回 response
    if (response.status === 200) {
      return {
        // token: response.headers['x-access-token'],
        data: response.data
      }
    } else {
      Promise.reject(response)
    }
  },
  error => {
    console.error(error) // for debug
    return Promise.reject(error)
  }
)

export default service
