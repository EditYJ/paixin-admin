/**
 * 使用element
 */

import { App } from 'vue'
import { ElButton, ElForm, ElFormItem, ElInput, ElTable, ElTableColumn } from 'element-plus'

const elementOption = {
  size: 'small',
  zIndex: 2000,
}

export function useElement(app: App) {
  app.config.globalProperties.$ELEMENT = elementOption

  app.use(ElButton).use(ElTable).use(ElTableColumn).use(ElForm).use(ElFormItem).use(ElInput)
}
