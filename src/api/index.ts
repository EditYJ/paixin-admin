import request, { ApiResponse } from '@/utils/request'

export interface TestResponseDataListItem {
  name: string
  age: number
  work: string
  desc: string
}
export interface TestResponseData {
  list: TestResponseDataListItem[]
  url: string
}
/**
 * 测试接口
 * @returns 测试接口的返回结果
 */
export function fetchTestApi() {
  return request.get<ApiResponse<TestResponseData>>('/api/testapi')
}
