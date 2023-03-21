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
    <div className={cn('pl-8', 'flex items-center', 'border-b lg:border-b-0')}>
      <div className='basis-2/12'>
        <img className='h-[80px]' src='logo.png' />
      </div>
      <div className='-ml-6 basis-5/12'>
        <div
          className={cn(
            'pl-3 mr-3 rounded-lg flex items-center',
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
        <div>
          <div className='lg:hidden flex gap-0 items-center'>
            <Button className='rounded-xl bg-[#eff1f8] px-2 py-2 text-black'>
              <FontAwesomeIcon size='lg' icon={faMagnifyingGlass} />
            </Button>
            <Button className='rounded-xl bg-[#eff1f8] px-2 py-2 text-black'>
              <FontAwesomeIcon size='lg' icon={faCartShopping} />
            </Button>
          </div>
          <Button className='w-[225px] hidden lg:inline-block'>
            <FontAwesomeIcon className='mr-2' icon={faCartShopping} />
            Checkout (200)
          </Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-4'>
          <div className='flex items-center justify-end'>
            <Avatar
              alt='Text'
              src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'
            />
          </div>
          <p className='font-semibold hidden lg:inline-block'>User Admin</p>
          <FontAwesomeIcon
            className='hidden lg:inline-block'
            icon={faChevronDown}
          />
        </div>
      </div>
    </div>
  )
}

export { Header }
