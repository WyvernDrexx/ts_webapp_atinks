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
    <div>
      <div className='flex flex-nowrap overflow-auto lg:hidden bg-white p-4 gap-4 mb-2 rounded-lg'>
        {sidebarItems.map((e) => {
          return <div className={
            cn('p-4 rounded-lg min-w-[200px] text-center text-[#BE222A] bg-[#fff2f2]',
              {
                'bg-[#BE222A] text-[#f9e8e9]': e.active,
              }
            )
          } key={e.title}>{e.title}</div>
        })}
      </div>
      <div className='bg-white rounded-xl px-4 pt-10 hidden lg:block relative'>
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
              <p
                className={cn('text-[#bababa] text-sm font-semibold', {
                  'text-[#c11e28]': e.active
                })}
              >
                {e.title}
              </p>
            </div>
          ))}
        </div>
        <div className='px-2 w-[100%] mt-[95px]'>
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
    </div>
  )
}

export { Sidebar }
