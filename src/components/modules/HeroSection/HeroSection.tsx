import { Button } from '@/elements/Button/Button'
import { NextImage } from '@/elements/NextImage/NextImage'

export const HeroSection = () => {
  return (
    <section id='about' className='flex flex-col sm:mt-5 sm:flex-row'>
      <div className='sm:w-5/12'>
        <NextImage width='568px' height='697px' src='/assets/images/banner.png' layout='responsive' />
      </div>
      <div className='mt-8 flex sm:mt-0 sm:w-7/12 sm:pl-5'>
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
