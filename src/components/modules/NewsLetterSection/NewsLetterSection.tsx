import { NextImage } from '@/elements/NextImage/NextImage'
import { Button } from '@/elements/Button/Button'
import { Input } from '@/elements/Input/Input'

export const NewsLetterSection = () => {
  return (
    <div className='bg-primary-100'>
      <div className='layout'>
        <div className='flex flex-col py-10 md:flex-row md:py-20'>
          <div className='w-full md:w-3/5 md:pr-5'>
            <NextImage
              className='relative h-[50px] w-[50px]'
              src='/assets/images/logo.png'
              layout='fill'
              objectFit='contain'
            />
            <h1 className='mt-3 font-bold'>
              A <span className='text-primary-500'>developer community</span> for everyone
            </h1>
            <p className='mt-3'>
              Highlighting class to join, articles to read, and event to attend. We sharing insight every period with
              free & lifetime membership
            </p>
          </div>
          <div className='w-full text-center md:mt-5 md:w-2/5'>
            <Input type='text' placeholder='Your Name' className='mt-3' />
            <Input type='email' placeholder='Email Address' className='mt-3' />
            <Button variant='primary' className='mt-3 block w-full'>
              Subscribe
            </Button>
            <small>We respect your privacy, free subscribe</small>
          </div>
        </div>
      </div>
    </div>
  )
}
