import { ChangeEvent } from 'react'

import clsxm from '@/lib/clsxm'

type Props = {
  input: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const SearchField = ({ input, onChange, className }: Props) => {
  return (
    <div
      className={clsxm(
        'flex w-full items-center  rounded-xl border border-primary-500 py-2 px-5',
        className
      )}
    >
      <img src='/assets/icons/search-icon.svg' alt='search-icon' />
      <input
        value={input}
        onChange={(e) => onChange(e)}
        type='text'
        placeholder='Input serial number'
        className='ml-3 w-full py-2 text-lg text-primary-500 outline-none md:text-xl'
      />
    </div>
  )
}
