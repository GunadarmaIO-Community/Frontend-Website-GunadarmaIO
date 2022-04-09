type Props = {
  onClick: () => void
}

export const HamburgerMenu = ({ onClick }: Props) => {
  return (
    <button className='h-6 w-8 border-y-2 border-primary-500 lg:hidden' onClick={onClick}>
      <div className='top-1/2 border-t-2 border-inherit'></div>
    </button>
  )
}
