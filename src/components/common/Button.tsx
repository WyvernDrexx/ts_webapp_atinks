import { ClassValue } from 'clsx'
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
        className,
        'text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export { Button }
