import { useEffect, useState } from 'react'

export const HistorySection = () => {
  const [active, setActive] = useState(0)
  const [next, setNext] = useState(1)
  const [prev, setPrev] = useState(2)
  const [activeStyle, setActiveStyle] = useState('z-10')
  const [nextStyle, setNextStyle] = useState('translate-x-[200px] translate-y-[50px]')
  const [prevStyle, setPrevStyle] = useState('translate-x-[-200px] translate-y-[50px]')

  const COMPETITIONS = [
    { title: 'Lomba 1', organizer: 'Universitas Indonesia', img: 'Gambar Lomba 1' },
    { title: 'Lomba 2', organizer: 'Universitas Gajah Mada', img: 'Gambar Lomba 2' },
    { title: 'Lomba 3', organizer: 'Universitas Brawijaya', img: 'Gambar Lomba 3' },
  ]

  useEffect(() => {
    const timer = setInterval(() => handleNextSlide(), 3000)
    return () => clearTimeout(timer)
  })

  const handleNextSlide = () => {
    setActiveStyle('translate-x-[-200px] translate-y-[50px]')
    setNextStyle('z-10')
    setPrevStyle('translate-x-[200px] translate-y-[50px]')
    setTimeout(() => {
      setActive((active + 1) % 3)
      setNext((next + 1) % 3)
      setPrev((prev + 1) % 3)
      setActiveStyle('z-10')
      setNextStyle('translate-x-[200px] translate-y-[50px]')
      setPrevStyle('translate-x-[-200px] translate-y-[50px]')
    }, 300)
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-28 text-center font-bold'>
        Make history with <span className='text-primary-500'>victory</span>
      </h1>
      <p className='mt-5 text-center md:w-2/3'>
        Over the years, our members have conquered many IT competitions across the nation. They’ve become our pride who
        will continue to astonish us!
      </p>
      <div className='mt-5 flex w-full justify-center'>
        {COMPETITIONS.map((competition, index) => (
          <div
            key={index}
            className={`absolute flex h-[300px] w-[300px] rounded-[20px] bg-white transition duration-500 ease-in-out ${
              index == active ? activeStyle : index == next ? nextStyle : prevStyle
            }`}
            onClick={() => handleNextSlide()}
          >
            {index != active ? <div className='absolute h-full w-full rounded-[20px] bg-black opacity-50'></div> : ''}
            <div className='flex h-full w-full flex-col justify-center text-center'>
              <p>{competition.img}</p>
              <p className='mt-3'>{competition.title}</p>
              <p className='mt-3 font-bold'>{competition.organizer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
