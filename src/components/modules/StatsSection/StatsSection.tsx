import { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'src/hooks/useMediaQuery'

export const StatsSection = () => {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const [active, setActive] = useState(0)
  const [activeStyle, setActiveStyle] = useState('block')
  const [btnActive, setBtnActive] = useState(true)
  const [isRight, setIsRight] = useState(true)

  const STATS = [
    { name: 'Active Member', count: 700, icon: '/assets/icons/multicultural-people-icon.svg' },
    { name: 'Material Class', count: 100, icon: '/assets/icons/classroom-icon.svg' },
    { name: 'Official Partnership', count: 15, icon: '/assets/icons/handshake-icon.svg' },
  ]

  const handlePrevSlide = useCallback(() => {
    if (btnActive) {
      setIsRight(false)
      setBtnActive(false)
      setActiveStyle('translate-x-[300px]')
      setTimeout(() => {
        setActive(active ? active - 1 : STATS.length - 1)
        setActiveStyle('block translate-x-[-300px]')
      }, 300)
      setTimeout(() => {
        setActiveStyle('block')
        setBtnActive(true)
      }, 400)
    }
  }, [active, STATS.length, btnActive])

  const handleNextSlide = useCallback(() => {
    if (btnActive) {
      setIsRight(true)
      setBtnActive(false)
      setActiveStyle('translate-x-[-300px]')
      setTimeout(() => {
        setActive((active + 1) % STATS.length)
        setActiveStyle('block translate-x-[300px]')
      }, 300)
      setTimeout(() => {
        setActiveStyle('block')
        setBtnActive(true)
      }, 400)
    }
  }, [active, STATS.length, btnActive])

  useEffect(() => {
    const timer = setInterval(() => (isRight ? handleNextSlide() : handlePrevSlide()), 3000)
    return () => clearTimeout(timer)
  }, [isRight, handleNextSlide, handlePrevSlide])

  return (
    <div
      className='relative flex flex-col overflow-hidden bg-primary-500 md:flex-row'
      style={{
        backgroundImage: 'url(/assets/images/bubble-bg-top.png), url(/assets/images/bubble-bg-bottom.png)',
        backgroundPosition: 'top center, bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className='layout flex flex-row'>
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
    </div>
  )
}
