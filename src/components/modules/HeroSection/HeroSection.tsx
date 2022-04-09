import { Button } from '@/elements/Button/Button'
import { NextImage } from '@/elements/NextImage/NextImage'

export const HeroSection = () => {
  return (
    <div id='about' className='flex flex-col md:flex-row'>
      <div className='w-full md:w-5/12'>
        <NextImage
          className='relative h-[350px] w-full'
          src='/assets/images/banner.png'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='mt-3 flex w-full md:ml-3 md:w-7/12'>
        <div className='self-center'>
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
    </div>
  )
}
