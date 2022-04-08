import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

export const NavItem = ({ children, href, className }: Props) => {
  return (
    <li className={`${className} mt-8 text-secondary-500 lg:ml-10 lg:mt-0 lg:text-black xl:ml-16 xl:mt-0`}>
      <Link href={href}>{children}</Link>
    </li>
  )
}
