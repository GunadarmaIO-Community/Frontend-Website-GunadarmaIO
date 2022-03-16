import { NextImage } from '@/elements/NextImage/NextImage'

export const Intro = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <div className='w-full md:w-4/5 lg:w-3/5 xl:w-2/5'>
          <h1 className='text-center font-bold'>
            Intro To <span className='text-primary-500'> Gunadarma I/O</span>
          </h1>
          <p className='pt-5 text-center'>
            Here we thrive, inspire, give and connect, in dedication of our
            members individual and collective success
          </p>
        </div>
      </div>
      <div className='flex flex-col pt-10'>
        <div className='flex flex-col-reverse items-center md:flex-row'>
          <div className='w-full p-5 md:w-3/5'>
            <p>
              We are here as a community engaged in competitive programming.
              Competitive programming is a branch of advanced programming
              science that is the development and manifestation of the data
              structures & algorithms fields
            </p>
          </div>
          <div className='w-full md:w-2/5'>
            <NextImage
              className='relative h-[250px] w-full'
              src='/assets/images/intro-1.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='w-full md:w-2/5'>
            <NextImage
              className='relative h-[270px] w-full'
              src='/assets/images/intro-2.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='w-full p-5 md:w-3/5'>
            <p>
              Competitive programming is also often used as a competition for IT
              students where the competition requires participants solve a
              problem algorithmically through a computer program. The program
              must produce answers within a certain time with a certain memory
              limit. Generally, the winners of competitive programming often
              ogled by a tech company to join his company so that it can also be
              a stepping stone in start a career.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
