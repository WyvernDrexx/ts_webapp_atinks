import { Verified } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Tabs } from 'components/common'
import { Info } from './Components'

function AboutUs() {
  return (
    <div className='w-[100%]'>
      <h1 className='text-2xl font-bold'>
        About Us
      </h1>
      <div>
        <div className='flex items-center mt-12'>
          <img className='h-[78px]' src='brand-logo.png' />
          <div className='pl-5'>
            <p className='text-lg flex items-center font-bold'>
              A.T. Inks
              <span className='ml-9 flex items-center'>
                <Verified htmlColor='#cbcbcb' />
                <span className='text-sm text-[#5298de] underline ml-2'>
                  Verify Company
                </span>
              </span>
            </p>
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
                Component: <Info />
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
