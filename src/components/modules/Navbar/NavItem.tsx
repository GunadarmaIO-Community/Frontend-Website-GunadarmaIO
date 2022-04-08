import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
  className?: string
  target?: HTMLAttributeAnchorTarget
}

export const NavItem = ({ children, href, className, target }: Props) => {
  return (
    <li className={`${className} mt-8 lg:ml-10 lg:mt-0 xl:ml-16 xl:mt-0`}>
      <Link href={href}>
        <a target={target}>{children}</a>
      </Link>
    </li>
  )
}
