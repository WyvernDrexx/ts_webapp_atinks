import {
  faCartShopping,
  faChevronDown,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components/common'
import { cn } from 'utils'
import Avatar from '@mui/material/Avatar'

function Header() {
  return (
    <div className={cn('pl-8', 'flex items-center')}>
      <div className='basis-2/12'>
        <img className='h-[80px]' src='logo.png' />
      </div>
      <div className='-ml-6 basis-5/12'>
        <div
          className={cn(
            'w-[589px] pl-3 rounded-lg flex items-center',
            'bg-[#eff2f9]'
          )}
        >
          <FontAwesomeIcon color='#c4c5ca' icon={faMagnifyingGlass} />
          <input
            type='text'
            id='first_name'
            className='ml-3 outline-none placeholder:font-semibold placeholder:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#eff2f9] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
            placeholder='Search...'
            
            required
          />
        </div>
      </div>
      <div className='flex items-center justify-end basis-5/12'>
        <Button className='w-[225px]'>
          <FontAwesomeIcon className='mr-2' icon={faCartShopping} />
          Checkout (200)
        </Button>
        <div className='grid grid-cols-3 items-center gap-4'>
          <div className='flex items-center justify-end'>
            <Avatar
              alt='Text'
              src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'
            />
          </div>
          <p className='font-semibold'>User Admin</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  )
}

export { Header }
