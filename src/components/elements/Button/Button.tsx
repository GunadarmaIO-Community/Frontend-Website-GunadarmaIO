import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

enum ButtonVariant {
  'primary',
  'secondary',
  'text',
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: keyof typeof ButtonVariant
}

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, className, variant, ...rest }, ref) => {
  return (
    <button
      {...rest}
      ref={ref}
      className={clsxm(
        'inline-flex items-center rounded-xl px-4 py-2 font-semibold',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
        'shadow-sm',
        'transition-colors duration-75',
        [
          variant === 'primary' && [
            'bg-primary-500 text-white',
            'hover:bg-primary-600 hover:text-white',
            'active:bg-primary-500',
            'disabled:bg-primary-400 hover:disabled:bg-primary-400',
          ],
          variant === 'secondary' && [
            'border-2 border-primary-500 bg-secondary-500 text-primary-500',
            'hover:bg-secondary-600',
            'active:bg-secondary-500',
            'disabled:bg-secondary-400  hover:disabled:bg-secondary-400',
          ],
        ],
        className
      )}
    >
      {children}
    </button>
  )
})
