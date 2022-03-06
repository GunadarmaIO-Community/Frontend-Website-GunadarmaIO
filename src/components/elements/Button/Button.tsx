import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        {...rest}
        ref={ref}
        className={clsxm(
          'rounded-md bg-primary-500 px-8 py-3 font-bold text-white',
          className
        )}
      >
        {children}
      </button>
    )
  }
)
