import { PropsWithChildren } from 'react'
import { cn } from 'utils'

type ButtonProps = object

function Button({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonProps & React.HTMLProps<HTMLButtonElement>>) {
  return (
    <button
      type='button'
      className={cn(
        'bg-black',
        'text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:focus:ring-gray-700 dark:border-gray-700',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export { Button }
