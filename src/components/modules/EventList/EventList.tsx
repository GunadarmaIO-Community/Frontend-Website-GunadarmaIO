import { useState } from 'react'
import { NextImage } from '@/elements/NextImage/NextImage'
import Link from 'next/link'

export const EventList = () => {
  const [eventList, setEventList] = useState([
    {
      title: 'DATA STRUCTURE 1',
      img: '/assets/images/event1.png',
      desc: "How to check if two given line segments intersect?  Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'DATA STRUCTURE 2',
      img: '/assets/images/event1.png',
      desc: "How to check if two given line segments intersect?  Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'DATA STRUCTURE 3',
      img: '/assets/images/event1.png',
      desc: "How to check if two given line segments intersect?  Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'DATA STRUCTURE 4',
      img: '/assets/images/event1.png',
      desc: "How to check if two given line segments intersect?  Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'DATA STRUCTURE 5',
      img: '/assets/images/event1.png',
      desc: "How to check if two given line segments intersect?  Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'DATA STRUCTURE 6',
      img: '/assets/images/event1.png',
      desc: "How to check if two given line segments intersect?  Lorem Ipsum has been the industry's standard dummy.",
    },
  ])

  return (
    <div className='mt-28 flex flex-col'>
      <h1 className='text-center font-bold'>
        Wanna boost your knowledge about{' '}
        <span className='text-primary-500'>algorithm</span> &{' '}
        <span className='text-primary-500'>data structure</span> ?
      </h1>
      <p className='mt-3 mb-6 text-center'>
        Here are several resource that you can learn with
      </p>
      <p className='text-right'>
        <Link href='/'>
          <a className='font-bold text-primary-500 hover:opacity-75'>
            View All Events
          </a>
        </Link>
      </p>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {eventList.map((event, index) => (
          <div key={index} className='rounded hover:opacity-75'>
            <div className='w-full'>
              <NextImage
                className='relative h-[130px] w-full md:h-[200px]'
                src={event.img}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <p className='font-bold text-primary-500'>{event.title}</p>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
