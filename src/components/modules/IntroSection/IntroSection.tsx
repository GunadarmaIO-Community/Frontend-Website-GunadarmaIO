import { NextImage } from '@/elements/NextImage/NextImage'

export const IntroSection = () => {
  return (
    <section id='intro'>
      <h1 className='text-center font-bold'>
        Intro To <span className='text-primary-500'> Gunadarma I/O</span>
      </h1>
      <p className='mt-5 text-center'>
        Here we thrive, inspire, give and connect, in dedication of our members individual and collective success
      </p>
      <div className='flex flex-col-reverse items-center sm:mt-10 sm:flex-row'>
        <div className='mt-5 w-full sm:mt-0 sm:w-3/5'>
          <p className='text-center sm:mr-10 sm:text-left'>
            We are here as a community engaged in competitive programming. Competitive programming is a branch of
            advanced programming science that is the development and manifestation of the data structures & algorithms
            fields
          </p>
        </div>
        <div className='mt-5 w-full sm:mt-0 sm:w-2/5'>
          <NextImage width='484px' height='305px' src='/assets/images/intro-1.png' layout='responsive' />
        </div>
      </div>
      <div className='flex flex-col items-center sm:mt-10 sm:flex-row'>
        <div className='mt-5 w-full sm:mt-0 sm:w-2/5'>
          <NextImage width='544px' height='518px' src='/assets/images/intro-2.png' layout='responsive' />
        </div>
        <div className='mt-5 w-full sm:mt-0 sm:w-3/5'>
          <p className='text-center sm:ml-10 sm:text-left'>
            Competitive programming is also often used as a competition for IT students where the competition requires
            participants solve a problem algorithmically through a computer program. The program must produce answers
            within a certain time with a certain memory limit. Generally, the winners of competitive programming often
            ogled by a tech company to join his company so that it can also be a stepping stone in start a career.
          </p>
        </div>
      </div>
    </section>
  )
}
