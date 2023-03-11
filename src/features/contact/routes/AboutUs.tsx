import { Typography } from '@mui/material'

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
      </div>
    </div>
  )
}

export { AboutUs }
