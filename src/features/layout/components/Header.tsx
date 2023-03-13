import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cn } from 'utils'

function Header() {
  return (
    <div
      className={cn(
        'pl-8',
        'h-[65px]',
        'flex items-center',
        'grid',
        'grid-cols-[300px_minmax(900px,_1fr)]'
      )}
    >
      <div>
        <img className='h-[50px]' src='logo.png' />
      </div>
      <div className='ml-8'>
        <div className={cn('w-[589px] pl-3 rounded-xl flex items-center', 'bg-[#eff2f9]')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type='text'
            id='first_name'
            className='ml-3 bg-[#eff2f9] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
            placeholder='Search'
            required
          ></input>
        </div>
      </div>
    </div>
  )
}

export { Header }

