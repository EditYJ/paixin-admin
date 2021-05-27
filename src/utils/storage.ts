/**
 * localStorage 封装
 *
 * @author 俞杰
 * @email 158392613@qq.com
 */
import config from '@/config'

/**
 * 获取项目下配置的命名空间中的localStorage的内容
 *
 * @returns 项目下命名空间内的存储内容
 */
function getStorage() {
  const storage = localStorage.getItem(config.localStorageNamespace)
  const serializeStorage = JSON.parse(storage || '{}')
  return serializeStorage
}

/**
 * 设置键值对到对应的命名空间下存储到 localStorage 中
 *
 * @param key 键
 * @param value 值
 */
export function setItem(key: string, value: any) {
  const storage = getStorage()
  const newStorage = { ...storage, ...{ [key]: value } }
  localStorage.setItem(config.localStorageNamespace, JSON.stringify(newStorage))
}

/**
 * 通过传入的键，拿到 localStorage下相应的值
 *
 * @param key 键
 * @returns 对应键下的值
 */
export function getItem<T = any>(key: string): T {
  const storage = getStorage()
  return storage[key]
}

/**
 * 通过传入的键，删除对应 localStorage下的值
 * @param key 键
 */
export function removeItem(key: string) {
  const storage = getStorage()
  delete storage[key]
  localStorage.setItem(config.localStorageNamespace, JSON.stringify(storage))
}

/**
 * 清除localStorage下所有的内容
 */
export function clearAll() {
  localStorage.clear()
}
