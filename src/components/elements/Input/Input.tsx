import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(({ className, ...rest }, ref) => {
  return <input {...rest} ref={ref} className={clsxm('w-full rounded p-3 outline-none', className)} />
})
