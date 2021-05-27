/**
 * 环境配置
 */
interface ConfigItem {
  BASE_URL: string
  MOCK_BASE_URL: string
}

const env = import.meta.env.VITE_ENV || 'prod'
const mockUrl = 'https://www.fastmock.site/mock/44065c0f89c00ac3a962a8160b81c131/admin-test'

const envConfig: { [key: string]: ConfigItem } = {
  dev: {
    BASE_URL: 'dev.com',
    MOCK_BASE_URL: mockUrl,
  },
  test: {
    BASE_URL: 'test.com',
    MOCK_BASE_URL: mockUrl,
  },
  prod: {
    BASE_URL: 'prod.com',
    MOCK_BASE_URL: mockUrl,
  },
}

const resConfig = envConfig[env]

export default {
  env,
  isMock: true,
  localStorageNamespace: 'paixin-admin',
  ...resConfig,
}
