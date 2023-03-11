import { TextField } from '@mui/material'
import React from 'react'
import { cn } from 'utils'

function Header() {
  return (
    <div
      className={cn(
        'pl-8',
        'h-[100px]',
        'flex items-center',
        'grid',
        'grid-cols-[300px_minmax(900px,_1fr)]'
      )}
    >
      <div>
        <img width={120} src='logo.png' />
      </div>
      <div className='ml-8'>
        <TextField placeholder='Search' className={cn('w-[589px]')} />
      </div>
    </div>
  )
}

export { Header }
