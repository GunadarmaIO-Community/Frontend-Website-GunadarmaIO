import Link from 'next/link'
import { useState } from 'react'

import { NextImage } from '@/elements/NextImage/NextImage'

const Slide = ({ event, className }) => {
  return (
    <div className={className}>
      <div className='flex flex-col md:gap-8 lg:m-5 lg:flex-row'>
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
          <h3 className='font-bold'>{event.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <div className='flex w-full shrink'>
            <button className='rounded-[8px] bg-[#54C659] p-3 font-bold hover:opacity-75'>Join Event!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const EventSection = () => {
  const [event] = useState([{ title: 'Event Title 1' }, { title: 'Event Title 2' }, { title: 'Event Title 3' }])
  const [active, setActive] = useState(0)
  const [activeStyle, setActiveStyle] = useState('block')
  const [btnActive, setBtnActive] = useState(true)

  const handlePrevSlide = () => {
    if (btnActive) {
      setBtnActive(false)
      setActiveStyle('translate-x-[2000px]')
      setTimeout(() => {
        setActive(active ? --active : event.length - 1)
        setActiveStyle('block translate-x-[-2000px]')
      }, 300)
      setTimeout(() => {
        setActiveStyle('block')
        setBtnActive(true)
      }, 600)
    }
  }

  const handleNextSlide = () => {
    if (btnActive) {
      setBtnActive(false)
      setActiveStyle('translate-x-[-2000px]')
      setTimeout(() => {
        setActive(++active % event.length)
        setActiveStyle('block translate-x-[2000px]')
      }, 300)
      setTimeout(() => {
        setActiveStyle('block')
        setBtnActive(true)
      }, 600)
    }
  }

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
        <div className='relative m-5 overflow-hidden'>
          {event.map((event, index) => (
            <Slide
              key={index}
              event={event}
              className={`w-100 relative float-left transition duration-500 ease-in-out ${
                index == active ? activeStyle : 'hidden'
              }`}
            />
          ))}
          <div className='absolute right-0 bottom-0'>
            <button
              className='mr-12 rounded-full bg-secondary-500 p-3 hover:opacity-75'
              onClick={() => handlePrevSlide()}
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
            <button className='rounded-full bg-secondary-500 p-3 hover:opacity-75' onClick={() => handleNextSlide()}>
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
  )
}
