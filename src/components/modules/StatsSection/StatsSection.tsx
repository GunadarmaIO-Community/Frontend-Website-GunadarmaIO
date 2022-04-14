import { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'src/hooks/useMediaQuery'

export const StatsSection = () => {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const [active, setActive] = useState(0)
  const [btnActive, setBtnActive] = useState(true)
  const [isRight, setIsRight] = useState(true)

  const STATS = [
    { name: 'Active Member', count: 700, icon: '/assets/icons/multicultural-people-icon.svg' },
    { name: 'Material Class', count: 100, icon: '/assets/icons/classroom-icon.svg' },
    { name: 'Official Partnership', count: 15, icon: '/assets/icons/handshake-icon.svg' },
  ]

  const handleSlide = useCallback(
    (i) => {
      if (btnActive) {
        setBtnActive(false)
        setIsRight(i < 0 ? false : true)
        setActive(active + i < 0 ? STATS.length - 1 : (active + i) % STATS.length)
        setTimeout(() => {
          setBtnActive(true)
        }, 500)
      }
    },
    [active, STATS.length, btnActive]
  )

  useEffect(() => {
    const timer = setInterval(() => (isRight ? handleSlide(1) : handleSlide(-1)), 3000)
    return () => clearTimeout(timer)
  }, [isRight, handleSlide])

  return (
    <section
      className='relative flex flex-col overflow-hidden bg-primary-500 sm:flex-row'
      style={{
        backgroundImage: 'url(/assets/images/bubble-bg-top.png), url(/assets/images/bubble-bg-bottom.png)',
        backgroundPosition: 'top center, bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className='layout flex h-[130px] flex-row sm:h-full'>
        {STATS.map((stats, index) => (
          <div
            key={index}
            className={`absolute flex h-full w-full justify-center transition duration-500 ease-in-out sm:relative sm:w-1/3 sm:px-8 sm:py-16 xl:py-24 ${
              isMobile &&
              ((index == active && 'block') ||
                (index == (active + 1) % STATS.length && 'translate-x-full opacity-0') ||
                '-translate-x-full opacity-0')
            }`}
          >
            <img src={stats.icon} className='w-[70px] lg:w-[100px]' alt={stats.name} />
            <div className='ml-2 self-center'>
              <p className='text-4xl font-bold text-[#54C659]'>
                {stats.count >= 100 ? stats.count + '+' : stats.count}
              </p>
              <p className='text-secondary-500 sm:mt-1'>{stats.name}</p>
            </div>
          </div>
        ))}
        {isMobile && (
          <>
            <div className='absolute left-0 flex h-full items-center'>
              <button className='h-full pr-5' onClick={() => handleSlide(-1)}>
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
              <button className='h-full pl-5' onClick={() => handleSlide(1)}>
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
        )}
      </div>
    </section>
  )
}
