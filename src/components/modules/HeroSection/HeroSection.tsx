import { Button } from '@/elements/Button/Button'
import { NextImage } from '@/elements/NextImage/NextImage'

type Props = {
  className?: string
}

export const HeroSection = ({ className }: Props) => {
  return (
    <section id='about' className={`flex flex-col sm:flex-row ${className}`}>
      <div className='sm:w-1/3'>
        <NextImage width='568px' height='697px' src='/assets/images/banner.png' layout='responsive' />
      </div>
      <div className='mt-8 flex sm:mt-0 sm:w-2/3 sm:pl-12'>
        <div className='self-center text-center sm:text-left'>
          <h1 className='font-bold'>
            Hello <span className='text-primary-500'>Fellas!</span>
          </h1>
          <p className='mt-3 font-bold'>
            #CrackThe<span className='text-primary-500'>Problem</span>
          </p>
          <p className='mt-5'>
            Gunadarma IO is an advance programming community in Gunadarma University were compose an insight related on
            Competitive Programming fields
          </p>
          <Button variant='primary' className='mt-10 px-10'>
            Explore IO!
          </Button>
        </div>
      </div>
    </section>
  )
}
