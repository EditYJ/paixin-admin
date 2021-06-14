import request, { ApiResponse } from '@/utils/request'
import { LoginRequest, UserInfo } from './type'

/**
 * 测试接口
 * @returns 测试接口的返回结果
 */
export function loginIn(body: LoginRequest) {
  return request.post<ApiResponse<UserInfo>>('/users/login', body)
}
