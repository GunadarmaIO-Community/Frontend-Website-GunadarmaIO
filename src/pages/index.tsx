import axios from 'axios'
import * as React from 'react'
import { Layout } from 'src/layouts/Main/Layout'

import { Seo } from '@/elements/Seo/Seo'
import { Intro } from '@/modules/Intro/Intro'
import { Event } from '@/modules/Event/Event'
import { OurDivision } from '@/modules/OurDivision/OurDivision'

import { GetDivisionResponse } from '@/types/response'
import { Division } from '@/types/type'

type Props = {
  divisions: Division[]
}

export default function IndexPage({ divisions }: Props) {
  return (
    <Layout>
      <Seo templateTitle='Index' />
      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Intro />
            <Event />
            <OurDivision className='mt-10 sm:mt-12' divisions={divisions} />
          </div>
        </section>
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

  return {
    props: { divisions },
  }
}
