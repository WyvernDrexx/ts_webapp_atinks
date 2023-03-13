import { AboutUsRoutes } from 'features/aboutUs'
import { Layout } from 'features/layout'
import { RouteObject, useRoutes } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <AboutUsRoutes /> }]
  }
]

export const AppRoutes = () => {
  const element = useRoutes(routes)
  return <>{element}</>
}
