import { Outlet } from 'react-router-dom'
import { cn } from 'utils'
import { Header, Sidebar } from './components'
import deviceErrorSvg from './device-error.svg'

function Layout() {
  return (
    <div>
      <div
        className={cn(
          ' overflow-hidden sm:hidden h-[100vh] w-[100%] bg-white fixed z-50',
          'flex justify-center items-center',
          'p-[30px]'
        )}
      >
        <div className='text-center'>
          <h1 className='text-[30px] leading-[36px] font-bold'>Uh oh!</h1>
          <h2 className='my-[15px]'>
            Mobile devices are currently not supported.
          </h2>
          <p className='text-sm text-[#898989]'>
            For better experience please use Desktop or tab devices. Once we
            develop our web app for mobile devices we will notify you
          </p>
          <img className='mx-auto mt-[50px]' src={deviceErrorSvg} />
        </div>
      </div>
      <div className='hidden sm:flex flex-col'>
        <Header />
        <div className=' bg-[#eff2f9] gap-7 p-8  lg:grid-cols-[260px_minmax(900px,_1fr)] lg:grid'>
          <Sidebar />
          <div className=' bg-white rounded-xl h-[100%] p-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Layout }
