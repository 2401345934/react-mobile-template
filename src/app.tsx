import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd-mobile'
import ZH from 'antd-mobile/es/locales/zh-CN'

import 'antd-mobile/es/global'
import './index.less'

const container = window.document.getElementById('app')!
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider locale={ZH}>
    <RouterProvider router={router} />
  </ConfigProvider>
)
