import Link from 'next/link'

import { NextImage } from '@/elements/NextImage/NextImage'

import { Article } from '@/types/type'

type Props = {
  articles: Article[]
}

export const ArticleSection = ({ articles }: Props) => {
  return (
    <div id='article' className='mt-28 flex flex-col'>
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
        {articles.map((article, index) => (
          <Link href={`article/${article.slug}`} key={index}>
            <a>
              <div className='rounded hover:opacity-75'>
                <div className='w-full'>
                  <NextImage
                    className='relative h-[130px] w-full md:h-[200px]'
                    src={article.gambar}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <p className='font-bold text-primary-500'>{article.judul_artikel}</p>
                <p>{article.detail_singkat}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
