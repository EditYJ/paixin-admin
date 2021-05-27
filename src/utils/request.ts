/**
 * 封装 axios
 *
 * @author 俞杰
 * @email 158392613@qq.com
 */

import axios, { AxiosError } from 'axios'
import config from '@/config'
import { ElMessage } from 'element-plus'
import store from '@/store'

export interface ApiResponse<T = {}> {
  code: number
  data: T
  msg: string
}

const service = axios.create({
  baseURL: config.BASE_URL,
  timeout: 5000,
})

service.interceptors.request.use(req => {
  store.commit('global/START_LOADING')
  const { headers } = req
  if (!headers.Authorizatation) {
    headers.Authorizatation = 'Bear edityj'
  }

  return req
})

service.interceptors.response.use(
  resp => {
    store.commit('global/FINISH_LOADING')
    const { code, msg } = resp.data
    if (code === 200) {
      return resp.data
    }
    ElMessage.error(msg || '网络错误')
    return Promise.reject(msg)
  },
  (err: AxiosError) => {
    store.commit('global/FINISH_LOADING')
    ElMessage.error(err.message)
    return Promise.reject(err)
  },
)

/**
 * 返回 axios 实例
 * 1. 判断是否是 mock 环境，如果是生产环境则绝对不会使用 mockApi
 * @param options Axios配置对象
 * @returns 请求结果
 */
function generateAxiosInstance() {
  const { env, BASE_URL, MOCK_BASE_URL, isMock } = config
  service.defaults.baseURL = isMock ? MOCK_BASE_URL : BASE_URL
  if (env === 'prod') {
    service.defaults.baseURL = BASE_URL
  }
  return service
}

export default generateAxiosInstance()
