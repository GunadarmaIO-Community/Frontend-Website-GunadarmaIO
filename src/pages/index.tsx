import axios from 'axios'
import * as React from 'react'
import { Layout } from 'src/layouts/Main/Layout'

import { Seo } from '@/elements/Seo/Seo'
import { ArticleSection } from '@/modules/ArticleSection/ArticleSection'
import { EventSection } from '@/modules/EventSection/EventSection'
import { HeroSection } from '@/modules/HeroSection/HeroSection'
import { HistorySection } from '@/modules/HistorySection/HistorySection'
import { IntroSection } from '@/modules/IntroSection/IntroSection'
import { OurDivision } from '@/modules/OurDivision/OurDivision'
import { StatsSection } from '@/modules/StatsSection/StatsSection'

import { GetEventResponse } from '@/types/response'
import { GetDivisionResponse } from '@/types/response'
import { Event } from '@/types/type'
import { Division } from '@/types/type'

type Props = {
  divisions: Division[]
  events: Event[]
}

export default function IndexPage({ divisions, events }: Props) {
  return (
    <Layout>
      <Seo templateTitle='Index' />
      <main>
        <div className='layout py-20'>
          <HeroSection />
        </div>
        <StatsSection />
        <div className='layout min-h-screen py-20'>
          <IntroSection />
          <OurDivision className='mt-10 sm:mt-12' divisions={divisions} />
          <EventSection events={events} />
          <ArticleSection events={events} />
          <HistorySection />
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const getDivision = async (): Promise<Division[]> => {
    try {
      const resDivsion = await axios.get<GetDivisionResponse>('divisi')
      return resDivsion.data.data
    } catch (err) {
      console.error(err)
      return []
    }
  }

  const divisions = await getDivision()

  const getEvents = async (): Promise<Event[]> => {
    try {
      const resEvents = await axios.get<GetEventResponse>('event')
      return resEvents.data.data
    } catch (err) {
      console.error(err)
      return []
    }
  }

  const events = await getEvents()

  return {
    props: { divisions, events },
  }
}
