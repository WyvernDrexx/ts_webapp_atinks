import { PersonPinCircle } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { PropsWithChildren } from 'react'
type CardProps = {
  title: string
  icon: JSX.Element
  onEditClick: () => void
}

function Card({
  title,
  icon,
  onEditClick,
  children
}: PropsWithChildren<CardProps>) {
  return (
    <div className={`w-[375px] border-2 p-6 rounded-xl`}>
      <div className='flex justify-between items-center'>
        <div>
          {icon}
          {title}
        </div>
        <IconButton onClick={onEditClick}>
          <PersonPinCircle />
        </IconButton>
      </div>
      {children}
    </div>
  )
}

export { Card }

