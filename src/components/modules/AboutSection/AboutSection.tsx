import { useState } from 'react'
import { useMediaQuery } from 'src/hooks/useMediaQuery'

import { Button } from '@/elements/Button/Button'
import { NextImage } from '@/elements/NextImage/NextImage'

export const AboutSection = () => {
  const [active, setActive] = useState(0)
  const [activeStyle, setActiveStyle] = useState('block')
  const [btnActive, setBtnActive] = useState(true)
  const isMobile = useMediaQuery('(max-width: 640px)')

  const STATS = [
    { name: 'Active Member', count: 700, icon: '/assets/icons/multicultural-people-icon.svg' },
    { name: 'Material Class', count: 100, icon: '/assets/icons/classroom-icon.svg' },
    { name: 'Official Partnership', count: 15, icon: '/assets/icons/handshake-icon.svg' },
  ]

  const handlePrevSlide = () => {
    if (btnActive) {
      setBtnActive(false)
      setActiveStyle('translate-x-[300px]')
      setTimeout(() => {
        setActive(active ? --active : STATS.length - 1)
        setActiveStyle('block translate-x-[-300px]')
      }, 300)
      setTimeout(() => {
        setActiveStyle('block')
        setBtnActive(true)
      }, 400)
    }
  }

  const handleNextSlide = () => {
    if (btnActive) {
      setBtnActive(false)
      setActiveStyle('translate-x-[-300px]')
      setTimeout(() => {
        setActive(++active % STATS.length)
        setActiveStyle('block translate-x-[300px]')
      }, 300)
      setTimeout(() => {
        setActiveStyle('block')
        setBtnActive(true)
      }, 400)
    }
  }

  return (
    <>
      <div className='flex flex-col md:flex-row'>
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
              Gunadarma IO is an advance programming community in Gunadarma University were compose an insight related
              on Competitive Programming fields
            </p>
            <Button variant='primary' className='mt-10 px-10'>
              Explore IO!
            </Button>
          </div>
        </div>
      </div>
      <div
        className='relative mt-5 flex flex-col overflow-hidden bg-primary-500 md:flex-row'
        style={{
          backgroundImage: 'url(/assets/images/bubble-bg-top.png), url(/assets/images/bubble-bg-bottom.png)',
          backgroundPosition: 'top center, bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        {STATS.map((stats, index) => (
          <div
            key={index}
            className={`relative flex w-full justify-center p-3 transition duration-500 ease-in-out md:w-1/3 md:px-8 md:py-10 ${
              isMobile ? (index == active ? activeStyle : 'hidden') : ''
            }`}
          >
            <img src={stats.icon} className='w-[50px] md:w-[70px]' alt='multicultural-people-icon' />
            <div className='ml-2 self-center'>
              <p className='text-3xl font-bold text-[#54C659]'>
                {stats.count >= 100 ? stats.count + '+' : stats.count}
              </p>
              <p className='text-secondary-500 md:mt-1'>{stats.name}</p>
            </div>
          </div>
        ))}
        {isMobile ? (
          <>
            <div className='absolute left-0 flex h-full items-center'>
              <button className='h-full pr-5' onClick={() => handlePrevSlide()}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 stroke-secondary-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                </svg>
              </button>
            </div>
            <div className='absolute right-0 flex h-full items-center'>
              <button className='h-full pl-5' onClick={() => handleNextSlide()}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 stroke-secondary-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <div className='mt-20 flex flex-col'>
        <div className='flex justify-center'>
          <div className='w-full md:w-4/5 lg:w-3/5 xl:w-2/5'>
            <h1 className='text-center font-bold'>
              Intro To <span className='text-primary-500'> Gunadarma I/O</span>
            </h1>
            <p className='pt-5 text-center'>
              Here we thrive, inspire, give and connect, in dedication of our members individual and collective success
            </p>
          </div>
        </div>
        <div className='flex flex-col pt-10'>
          <div className='flex flex-col-reverse items-center md:flex-row'>
            <div className='w-full p-5 md:w-3/5'>
              <p>
                We are here as a community engaged in competitive programming. Competitive programming is a branch of
                advanced programming science that is the development and manifestation of the data structures &
                algorithms fields
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
                Competitive programming is also often used as a competition for IT students where the competition
                requires participants solve a problem algorithmically through a computer program. The program must
                produce answers within a certain time with a certain memory limit. Generally, the winners of competitive
                programming often ogled by a tech company to join his company so that it can also be a stepping stone in
                start a career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
