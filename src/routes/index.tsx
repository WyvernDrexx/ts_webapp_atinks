import { ContactUsRoutes } from 'features/contact'
import { Link, Outlet, RouteObject, useRoutes } from 'react-router-dom'
const AdminLayput = () => {
  return (
    <div>
      <Link to='/admin/users'></Link>
      <Outlet />
    </div>
  )
}

export const adminViewRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AdminLayput />,
    children: [{ path: '/', element: <ContactUsRoutes /> }]
  }
]
export const AppRoutes = () => {
  const element = useRoutes(adminViewRoutes)

  return <>{element}</>
}
