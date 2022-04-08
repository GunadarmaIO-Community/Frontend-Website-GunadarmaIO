import { useState } from 'react'
import { useMediaQuery } from 'src/hooks/useMediaQuery'

import { Button } from '@/elements/Button/Button'

import { Division } from '@/types/type'

type Props = {
  divisions: Division[]
  className?: string
}

export const OurDivision = ({ divisions, className }: Props) => {
  const [selectedDivision, setSelectedDivision] = useState('mentor')
  const [selectedTab, setSelectedTab] = useState<'job-desc' | 'core-team'>('job-desc')
  const isMobile = useMediaQuery('(max-width: 640px)')

  const DIVISIONS = [
    'mentor',
    'managing-director',
    'curriculum-programming',
    'community-development',
    'creative-media-design',
  ]
  const createDivisionOptionsViews = (isMobile = true) => {
    return DIVISIONS.map((DIV) => {
      const division = divisions.find((item) => item.slug === DIV)
      if (isMobile && division) {
        return (
          <option key={division.id} value={DIV}>
            {division.nama}
          </option>
        )
      }
      if (!isMobile && division) {
        return (
          <li
            className={selectedDivision === DIV ? 'font-semibold text-primary-500' : ''}
            key={division.id}
            onClick={() => setSelectedDivision(DIV)}
          >
            {division.nama}
          </li>
        )
      }
    })
  }

  const createDivisionContent = () => {
    const currentDivision = divisions.find((division) => division.slug === selectedDivision)

    if (selectedTab === 'job-desc' && currentDivision) {
      return <p>{currentDivision.deskripsi}</p>
    }
    if (selectedTab === 'core-team' && currentDivision) {
      return (
        <ul className='mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:w-auto lg:grid-cols-3'>
          {currentDivision.teams.map((person) => (
            <li key={person.id} className='flex w-full flex-col items-center justify-center'>
              <div className='h-[40px] w-[40px] bg-gray-300'></div>
              <h3 className='p my-1 font-semibold text-primary-500'>{person.status}</h3>
              <p>{person.nama}</p>
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <div id='division' className={className}>
      <h1 className='text-center font-bold'>
        Our <span className='text-primary-500'>Division</span>
      </h1>
      <p className='mt-3 mb-6 text-center sm:mt-6 sm:mb-12'>
        Our members are a part of diverse divisions that work together as one.
      </p>
      <div className='flex h-full w-full flex-col sm:flex-row'>
        {isMobile && (
          <select
            name='division'
            id='division'
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className='mb-6 rounded bg-gray-200 py-2 focus:outline-primary-500'
          >
            {createDivisionOptionsViews()}
          </select>
        )}
        {!isMobile && <ul className='my-4 mr-4 flex w-1/3 flex-col space-y-8'>{createDivisionOptionsViews(false)}</ul>}
        {!isMobile && <div className='mt-4 mr-10 block h-[250px] w-1 rounded-full bg-gray-100 lg:h-[200px]'></div>}

        <div className='mb-3 flex-1 '>
          <div className='space-x-2'>
            <Button
              variant={selectedTab === 'job-desc' ? 'secondary' : undefined}
              className={selectedTab !== 'job-desc' ? 'text-gray-400' : ''}
              onClick={() => setSelectedTab('job-desc')}
            >
              Job Desc
            </Button>
            <Button
              variant={selectedTab === 'core-team' ? 'secondary' : undefined}
              className={selectedTab !== 'core-team' ? 'text-gray-400' : ''}
              onClick={() => setSelectedTab('core-team')}
            >
              Core Team
            </Button>
          </div>
          <div className='mt-4 flex'>{createDivisionContent()}</div>
        </div>
      </div>
    </div>
  )
}
