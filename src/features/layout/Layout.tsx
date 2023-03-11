import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from './components'

function Layout() {
  return (
    <div className='flex flex-col h-[100vh]'>
      <Header />
      <div className='grid bg-[#eff2f9] gap-8 p-8 h-[100%] grid-cols-[300px_minmax(900px,_1fr)]'>
        <Sidebar />
        <div className='border-2 bg-white rounded-xl h-[100%] flex p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { Layout }
