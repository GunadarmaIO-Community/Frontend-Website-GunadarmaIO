import * as React from 'react'
import { Layout } from 'src/layouts/Main/Layout'

import { Seo } from '@/elements/Seo/Seo'
import Intro from '@/modules/Intro'

export default function IndexPage() {
  return (
    <Layout>
      <Seo templateTitle='Index' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Intro />
          </div>
        </section>
      </main>
    </Layout>
  )
}
