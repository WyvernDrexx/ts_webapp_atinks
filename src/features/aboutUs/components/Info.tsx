import {
  faAddressBook,
  faLocationPin,
  faClock,
  faLink,
  faQuoteLeft,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FloatingDrawer } from 'components/common/FloatingDrawer'
import { cn } from 'utils'
import { Card } from './Card'

function Info() {
  const emails = ['salesteam@br.in', 'salesteam2@br.in', 'salesteam3@br.in']
  const phoneNumbers = ['+91 8511591740', '8000058214', '112233445566']

  const cards = [
    {
      title: 'Contact',
      icon: faAddressBook,
      onEditClick: () => alert('Clicked!'),
      Body: (
        <div className='ml-[2px] mt-10'>
          <div className='flex items-center relative'>
            <FontAwesomeIcon color='#c3c3c3' icon={faEnvelope} />
            <div className='relative flex w-[100%]'>
              <p className='ml-2'>{emails.slice(0, 2).join(' / ')}</p>
              {emails.length > 2 && (
                <span
                  className={cn(
                    'text-red-500 bg-[#fef3f3]',
                    'absolute right-0 bottom-0 h-8 w-8',
                    'text-xs ',
                    'flex justify-center items-center rounded-full'
                  )}
                >
                  +{emails.length - 2}
                </span>
              )}
            </div>
          </div>
          <div className='flex items-center mt-4 relative'>
            <FontAwesomeIcon color='#c3c3c3' icon={faPhone} />
            <div className='relative flex w-[100%]'>
              <p className='ml-2'>{phoneNumbers.slice(0, 2).join(' / ')}</p>
              {phoneNumbers.length > 2 && (
                <span
                  className={cn(
                    'text-red-500 bg-[#fef3f3]',
                    'absolute right-0 bottom-0 h-8 w-8',
                    'text-xs ',
                    'flex justify-center items-center rounded-full'
                  )}
                >
                  +{phoneNumbers.length - 2}
                </span>
              )}
            </div>
          </div>
          <FloatingDrawer show onClose={() => null} title='Contacts'>
            <div className='mt-6'>
              <Card
                icon={faAddressBook}
                onEditClick={() => null}
                title='Sales Team'
              >
                Content
              </Card>
            </div>
          </FloatingDrawer>
        </div>
      )
    },
    {
      title: 'Address',
      icon: faLocationPin,
      onEditClick: () => alert('Clicked!')
    },
    {
      title: 'Hours of Operations',
      icon: faClock,
      onEditClick: () => alert('Clicked!')
    },
    {
      title: 'Social Media & Links',
      icon: faLink,
      onEditClick: () => alert('Clicked!')
    },
    {
      title: 'Statement',
      icon: faQuoteLeft,
      onEditClick: () => alert('Clicked!')
    }
  ]

  return (
    <div className='grid grid-cols-3 gap-5'>
      {cards.map((e) => (
        <Card icon={e.icon} onEditClick={e.onEditClick} title={e.title}>
          {e.Body && e.Body}
        </Card>
      ))}
    </div>
  )
}

export { Info }
