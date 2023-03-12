import { ContactPage } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Tabs } from 'components/common'
import { Card } from './Components'

function AboutUs() {
  return (
    <div>
      <Typography gutterBottom variant='h5'>
        About Us
      </Typography>
      <div>
        <div className='flex items-center'>
          <div>
            <img className='h-[78px]' src='brand-logo.png' />
          </div>
          <div className='pl-5 mt-12'>
            <p className='text-lg font-bold'>A.T. Inks</p>
            <p className='pt-2 text-md text-[#777777]'>Digital Inks</p>
          </div>
        </div>
        <div className='w-[830px] mt-8 text-[#909090]'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          nesciunt ea officia ipsa delectus repellat. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit.
        </div>
        <div className='mt-[55px]'>
          <Tabs
            tabs={[
              {
                label: 'Info',
                Component: (
                  <div>
                    <Card
                      icon={<ContactPage />}
                      onEditClick={() => null}
                      title='Contact'
                    >
                      CHILD
                    </Card>
                  </div>
                )
              },
              {
                label: 'FAQ',
                Component: <div>FAQ</div>
              },
              {
                label: 'Complaints and Feedbacks',
                Component: <div>Complaints and Feedbacks</div>
              },
              {
                label: 'Privacy Policy',
                Component: <div>Privacy Policy</div>
              },
              {
                label: 'Terms and Condition',
                Component: <div>Terms and Condition</div>
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { AboutUs }
