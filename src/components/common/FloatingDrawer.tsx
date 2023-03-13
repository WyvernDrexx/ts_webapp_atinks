import { createPortal } from 'react-dom'
import { PropsWithChildren } from 'react'
import { IconButton, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

type FloatingDrawerProps = {
  title: string
  show: boolean
  onClose: () => void
}

function FloatingDrawer({
  show,
  onClose,
  title,
  children
}: PropsWithChildren<FloatingDrawerProps>) {
  if (!show) return null
  return (
    <div>
      {createPortal(
        <div className='p-8 fixed h-[100vh] bg-white w-[600px] z-50 top-0 right-0 drop-shadow-xl'>
          <div className='flex items-center'>
            <IconButton onClick={onClose} sx={{ marginLeft: '-12px' }}>
              <ArrowBack />
            </IconButton>
            <Typography
              sx={{ fontWeight: 'bold' }}
              className='pl-4'
              variant='h5'
            >
              {title}
            </Typography>
          </div>
          {children}
        </div>,
        document.getElementById('floating-drawer')!
      )}
    </div>
  )
}

export { FloatingDrawer }
