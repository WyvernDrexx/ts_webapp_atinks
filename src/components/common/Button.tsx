import { PropsWithChildren } from 'react'
import { cn } from 'utils'

type ButtonProps = object

function Button({
  children,
  className,
  disabled,
  ...rest
}: PropsWithChildren<ButtonProps & React.HTMLProps<HTMLButtonElement>>) {
  return (
    <button
      disabled={disabled}
      type='button'
      className={cn(
        'bg-black',
        'text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:focus:ring-gray-700 dark:border-gray-700',
        { '!bg-slate-400 !text-white hover:!bg-slate-400 hover:!text-white': disabled },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export { Button }
