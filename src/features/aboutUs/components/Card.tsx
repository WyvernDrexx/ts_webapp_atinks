import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { PropsWithChildren } from 'react'

type CardProps = {
  title: string
  icon: IconDefinition
  onEditClick: () => void
}

function Card({
  title,
  icon,
  onEditClick,
  children
}: PropsWithChildren<CardProps>) {
  return (
    <div className={`border p-6 rounded-xl`}>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <FontAwesomeIcon size='2x' color='#c3c3c3' icon={icon} />
          <p className='ml-3 text-xl font-semibold'>{title}</p>
        </div>
        <IconButton onClick={onEditClick}>
          <Edit color='error' />
        </IconButton>
      </div>
      <div>{children}</div>
    </div>
  )
}

export { Card }
