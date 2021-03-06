import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { NextImage } from '@/elements/NextImage/NextImage'

import { Event } from '@/types/type'

type Props = {
  events: Event[]
  className?: string
}

export const EventSection = ({ events, className }: Props) => {
  const [active, setActive] = useState(0)
  const [btnActive, setBtnActive] = useState(true)
  const [isRight, setIsRight] = useState(true)

  const handleSlide = useCallback(
    (i) => {
      if (btnActive) {
        setBtnActive(false)
        setIsRight(i < 0 ? false : true)
        setActive(active + i < 0 ? events.length - 1 : (active + i) % events.length)
        setTimeout(() => {
          setBtnActive(true)
        }, 500)
      }
    },
    [active, events.length, btnActive]
  )

  useEffect(() => {
    const timer = setInterval(() => (isRight ? handleSlide(1) : handleSlide(-1)), 3000)
    return () => clearTimeout(timer)
  }, [isRight, handleSlide])

  return (
    <section id='events' className={`${className}`}>
      <h1 className='text-center font-bold'>
        Get to know our <span className='text-primary-500'>events</span> and{' '}
        <span className='text-primary-500'>participate</span> in it
      </h1>
      <p className='mt-5 text-center'>
        Through our events, we aim to create a lasting impact for our participants in their journey of exploring the
        vast world of technology
      </p>
      <p className='mt-10 text-right'>
        <Link href='/'>
          <a className='font-bold text-primary-500 hover:opacity-75'>View All Events</a>
        </Link>
      </p>
      <div className='mt-5 rounded-[24px] bg-gradient-to-b from-primary-500 to-primary-700'>
        <div className='relative h-[530px] justify-center overflow-hidden sm:h-[650px] lg:h-[370px]'>
          {events.map((event, index) => (
            <Slide
              key={index}
              event={event}
              className={`absolute h-full w-full p-5 transition duration-1000 ease-in-out lg:p-8 ${
                (index == active && 'block') ||
                (index == (active + 1) % events.length && 'translate-x-full opacity-0') ||
                '-translate-x-full opacity-0'
              }`}
            />
          ))}
          <div className='absolute right-5 bottom-5 lg:bottom-8 lg:right-8'>
            <button
              className='mr-12 rounded-full bg-secondary-500 p-3 hover:opacity-75'
              onClick={() => handleSlide(-1)}
            >
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
            <button className='rounded-full bg-secondary-500 p-3 hover:opacity-75' onClick={() => handleSlide(1)}>
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
    </section>
  )
}

type SlideProps = {
  event: Event
  className: string
}

const Slide = ({ event, className }: SlideProps) => {
  return (
    <div className={className}>
      <div className='flex w-full flex-col lg:flex-row'>
        <div className='w-full lg:w-5/12'>
          <NextImage
            className='relative h-[200px] sm:h-[300px] lg:h-[250px]'
            src={event.gambar}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='mt-3 flex w-full flex-col gap-y-5 text-secondary-500 lg:mt-0 lg:w-7/12 lg:pl-5'>
          <p>
            March 13, 2022 <span className='text-[#54C659]'>(18:00 - 21:00 WIB)</span>
          </p>
          <h3 className='font-bold'>{event.judul_event}</h3>
          <p className='line-clamp-5'>{event.detail_singkat}</p>
          <div className='flex w-full shrink'>
            <button className='rounded-[8px] bg-[#54C659] p-3 font-bold hover:opacity-75'>Join Event!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
