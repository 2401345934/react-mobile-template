// @ts-nocheck
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '@/components/Loading'
const Home = React.lazy(() => import('@/index'))
const initRouter = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: '*',
    element: <Home />
  }
]
const router = createBrowserRouter(initRouter)

const routerList: any = initRouter[0].children?.map(item => {
  return {
    ...item,
    key: item.path
  }
})
export { router, routerList }
