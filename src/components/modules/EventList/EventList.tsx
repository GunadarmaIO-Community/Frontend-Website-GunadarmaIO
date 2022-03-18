import { useState } from 'react'
import { NextImage } from '@/elements/NextImage/NextImage'
import Link from 'next/link'

import { EventListAPI } from '@/types/type'

type Props = {
  eventLists: EventListAPI[]
}

export const EventList = ({ eventLists }: Props) => {
  return (
    <div className='mt-28 flex flex-col'>
      <h1 className='text-center font-bold'>
        Wanna boost your knowledge about <span className='text-primary-500'>algorithm</span> &{' '}
        <span className='text-primary-500'>data structure</span> ?
      </h1>
      <p className='mt-3 mb-6 text-center'>Here are several resource that you can learn with</p>
      <p className='text-right'>
        <Link href='/'>
          <a className='font-bold text-primary-500 hover:opacity-75'>View All Events</a>
        </Link>
      </p>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {eventLists.map((event, index) => (
          <Link href={`event/${event.slug}`} key={index}>
            <a>
              <div className='rounded hover:opacity-75'>
                <div className='w-full'>
                  <NextImage
                    className='relative h-[130px] w-full md:h-[200px]'
                    src={event.gambar}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <p className='font-bold text-primary-500'>{event.judul_event}</p>
                <p>{event.detail_singkat}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
