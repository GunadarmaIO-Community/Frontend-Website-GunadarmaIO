import axios from 'axios'
import * as React from 'react'
import { Layout } from 'src/layouts/Main/Layout'

import { Seo } from '@/elements/Seo/Seo'
import { AchievementSection } from '@/modules/AchievementSection/AchievementSection'
import { ArticleSection } from '@/modules/ArticleSection/ArticleSection'
import { EventSection } from '@/modules/EventSection/EventSection'
import { Footer } from '@/modules/Footer/Footer'
import { HeroSection } from '@/modules/HeroSection/HeroSection'
import { IntroSection } from '@/modules/IntroSection/IntroSection'
import { Navbar } from '@/modules/Navbar/Navbar'
import { NewsLetterSection } from '@/modules/NewsLetterSection/NewsLetterSection'
import { OurDivision } from '@/modules/OurDivision/OurDivision'
import { StatsSection } from '@/modules/StatsSection/StatsSection'

import { GetEventResponse } from '@/types/response'
import { GetDivisionResponse } from '@/types/response'
import { GetArticleResponse } from '@/types/response'
import { Event } from '@/types/type'
import { Division } from '@/types/type'
import { Article } from '@/types/type'

type Props = {
  divisions: Division[]
  events: Event[]
  articles: Article[]
}

export default function IndexPage({ divisions, events, articles }: Props) {
  return (
    <Layout>
      <Seo />
      <Navbar className='' />
      <main>
        <div className='layout py-20'>
          <HeroSection className='sm:mt-20' />
        </div>
        <StatsSection className='my-0 md:my-12' />
        <div className='layout min-h-screen py-20'>
          <IntroSection className='' />
          <OurDivision className='mt-20 md:mt-32' divisions={divisions} />
          <EventSection className='mt-20 md:mt-32' events={events} />
          <ArticleSection className='mt-20 md:mt-32' articles={articles} />
        </div>
        <AchievementSection className='mb-20 md:mb-32 md:mt-12' />
        <NewsLetterSection className='' />
      </main>
      <Footer className='py-10' />
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

  const getArticles = async (): Promise<Article[]> => {
    try {
      const resArticles = await axios.get<GetArticleResponse>('artikel')
      return resArticles.data.data
    } catch (err) {
      console.error(err)
      return []
    }
  }

  const articles = await getArticles()

  return {
    props: { divisions, events, articles },
  }
}
