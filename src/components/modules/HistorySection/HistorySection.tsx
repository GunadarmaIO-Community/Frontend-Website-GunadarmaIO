import { useCallback, useEffect, useState } from 'react'

import { NextImage } from '@/elements/NextImage/NextImage'

export const HistorySection = () => {
  const [active, setActive] = useState(0)
  const [btnActive, setBtnActive] = useState(true)

  const COMPETITIONS = [
    {
      title: 'Lomba 1',
      organizer: 'Universitas Indonesia',
      img: 'https://cdn.discordapp.com/attachments/826088171212636211/959083610831474729/compfest13-color_1.jpg',
    },
    {
      title: 'Lomba 2',
      organizer: 'Universitas Gajah Mada',
      img: 'https://cdn.discordapp.com/attachments/826088171212636211/959083610831474729/compfest13-color_1.jpg',
    },
    {
      title: 'Lomba 3',
      organizer: 'Universitas Brawijaya',
      img: 'https://cdn.discordapp.com/attachments/826088171212636211/959083610831474729/compfest13-color_1.jpg',
    },
  ]

  const handleNextSlide = useCallback(() => {
    if (btnActive) {
      setBtnActive(false)
      setActive((active + 1) % 3)
      setTimeout(() => {
        setBtnActive(true)
      }, 500)
    }
  }, [active, btnActive])

  useEffect(() => {
    const timer = setInterval(() => handleNextSlide(), 5000)
    return () => clearTimeout(timer)
  }, [handleNextSlide])

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-28 text-center font-bold'>
        Make history with <span className='text-primary-500'>victory</span>
      </h1>
      <p className='mt-5 text-center md:w-2/3'>
        Over the years, our members have conquered many IT competitions across the nation. They’ve become our pride who
        will continue to astonish us!
      </p>
      <div className='relative mt-5 flex h-[350px] w-full justify-center overflow-hidden'>
        {COMPETITIONS.map((competition, index) => (
          <div
            key={index}
            className={`absolute flex h-[300px] w-[300px] rounded-[20px] bg-white transition duration-500 ease-in-out ${
              index == active
                ? 'z-10'
                : index == (active + 1) % 3
                ? 'translate-x-[200px] translate-y-[50px]'
                : 'translate-x-[-200px] translate-y-[50px]'
            }`}
            onClick={() => handleNextSlide()}
          >
            {index != active && <div className='absolute z-20 h-full w-full rounded-[20px] bg-black opacity-50'></div>}
            <div className='flex h-full w-full flex-col justify-center text-center'>
              <div className='w-full'>
                <NextImage
                  className='relative h-[120px] w-full'
                  src={competition.img}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <p className='mt-3'>{competition.title}</p>
              <p className='mt-3 font-bold'>{competition.organizer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
