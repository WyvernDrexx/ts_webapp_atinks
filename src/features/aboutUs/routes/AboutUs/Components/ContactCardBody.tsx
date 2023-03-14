import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cn } from 'utils'

type ContactCardTypes = {
  emails: string[]
  phoneNumbers: string[]
}

function ContactCardBody({ emails, phoneNumbers }: ContactCardTypes) {
  return (
    <div className='ml-[2px] mt-10'>
      <div className='flex items-center relative'>
        <FontAwesomeIcon color='#c3c3c3' icon={faEnvelope} />
        <div className='relative flex w-[100%]'>
          <p className='ml-4'>{emails.slice(0, 2).join(' / ')}</p>
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
      <div className='flex items-center mt-8 relative'>
        <FontAwesomeIcon color='#c3c3c3' icon={faPhone} />
        <div className='relative flex w-[100%]'>
          <p className='ml-4'>{phoneNumbers.slice(0, 2).join(' / ')}</p>
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
    </div>
  )
}

export { ContactCardBody }
