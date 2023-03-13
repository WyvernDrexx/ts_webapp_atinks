import {
  ContactSupport,
  Dashboard,
  EmojiEvents,
  Games,
  Handshake,
  Payments,
  PeopleAlt,
  SmsFailed,
  Widgets
} from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import { Button } from 'components/common'
import { cn } from 'utils'

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: Dashboard,
    active: false,
    key: 'dashboard'
  },
  {
    title: 'Orders',
    icon: Widgets,
    active: false,
    key: 'orders'
  },
  {
    title: 'Team Members',
    icon: PeopleAlt,
    active: false,
    key: 'team-members'
  },
  {
    title: 'Partners',
    icon: Handshake,
    active: false,
    key: 'partners'
  },
  {
    title: 'Product Listing',
    icon: Games,
    active: false,
    key: 'product-list'
  },
  {
    title: 'Awards & Honours',
    icon: EmojiEvents,
    active: false,
    key: 'awrd-honours'
  },
  {
    title: 'About Us',
    icon: SmsFailed,
    active: true,
    key: 'about-us'
  },
  {
    title: 'Payment Info',
    icon: Payments,
    active: false,
    key: 'payment-info'
  }
]

function Sidebar() {
  return (
    <div className=' bg-white rounded-xl h-[100%] px-4 pt-10 relative'>
      <img className='h-[50px]' src='logo-no-text.png' />
      <div className='mt-10'>
        {sidebarItems.map((e) => (
          <div
            className={cn(
              'p-4 rounded-xl flex items-center cursor-pointer',
              'hover:bg-[#faf9f9]',
              {
                'bg-[#fff1f3]': e.active
              }
            )}
            key={e.key}
          >
            <e.icon
              className={cn('mr-5 text-[#bababa]', {
                'text-[#c11e28]': e.active
              })}
            />
            <p className={cn('text-[#bababa] text-sm font-semibold', { 'text-[#c11e28]': e.active })}>
              {e.title}
            </p>
          </div>
        ))}
      </div>
      <div className='p-6 w-[100%] left-0 absolute bottom-0'>
        <div className='px-8 rounded-xl flex flex-col justify-center items-center border-2'>
          <ContactSupport className='text-[#dadada]' fontSize='large' />
          <p className='font-bold'>Need Help?</p>
          <Typography className='text-center pt-4' variant='caption'>
            Our Support team is at your disposal.
          </Typography>
          <Button className='w-[112px] mt-5 mb-4'>Get Help</Button>
        </div>
      </div>
    </div>
  )
}

export { Sidebar }
