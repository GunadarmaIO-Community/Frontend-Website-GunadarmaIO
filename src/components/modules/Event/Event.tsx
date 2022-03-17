import { NextImage } from '@/elements/NextImage/NextImage'
import Link from 'next/link'

export const Event = () => {
  return (
    <div className='mt-10 flex flex-col'>
      <div className='flex justify-center'>
        <div className='w-full xl:w-4/5'>
          <h1 className='text-center font-bold'>
            Get to know our <span className='text-primary-500'>events</span> and{' '}
            <span className='text-primary-500'>participate</span> in it
          </h1>
          <p className='pt-5 text-center'>
            Through our events, we aim to create a lasting impact for our participants in their journey of exploring the
            vast world of technology
          </p>
        </div>
      </div>
      <div className='mt-10 flex justify-end'>
        <Link href='/'>
          <a className='font-bold text-primary-500 hover:opacity-75'>View All Events</a>
        </Link>
      </div>
      <div className='mt-5 rounded-[24px] bg-gradient-to-b from-primary-500 to-primary-700'>
        <div className='m-5 flex flex-col items-center md:gap-8 lg:m-10 lg:flex-row'>
          <div className='w-full lg:w-5/12'>
            <NextImage
              className='relative h-[200px] md:w-full lg:h-[250px]'
              src='/assets/images/event.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='mt-3 flex w-full flex-col gap-y-5 text-secondary-500 lg:w-7/12'>
            <p>
              March 13, 2022 <span className='text-[#54C659]'>(18:00 - 21:00 WIB)</span>
            </p>
            <h3 className='font-bold'>Data Structure Non Linear: Recursion</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <div className='flex flex-row'>
              <div className='flex w-full shrink'>
                <button className='rounded-[8px] bg-[#54C659] p-3 font-bold hover:opacity-75'>Join Event!</button>
              </div>
              <div className='mr-8 flex shrink-0'>
                <button className='rounded-full bg-secondary-500 p-3 hover:opacity-75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 stroke-primary-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                  </svg>
                </button>
              </div>
              <div className='flex shrink-0'>
                <button className='rounded-full bg-secondary-500 p-3 hover:opacity-75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 stroke-primary-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
