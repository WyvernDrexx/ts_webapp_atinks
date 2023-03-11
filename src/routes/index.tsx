import { ContactUsRoutes } from 'features/contact'
import { Layout } from 'features/layout'
import { RouteObject, useRoutes } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <ContactUsRoutes /> }]
  }
]

export const AppRoutes = () => {
  const element = useRoutes(routes)
  return <>{element}</>
}
