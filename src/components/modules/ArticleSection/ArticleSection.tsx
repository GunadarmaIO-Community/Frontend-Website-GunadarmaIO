import Link from 'next/link'

import { NextImage } from '@/elements/NextImage/NextImage'

import { Article } from '@/types/type'

type Props = {
  articles: Article[]
  className?: string
}

export const ArticleSection = ({ articles, className }: Props) => {
  return (
    <section id='article' className={`${className}`}>
      <h1 className='text-center font-bold'>
        Wanna boost your knowledge about <span className='text-primary-500'>algorithm</span> &{' '}
        <span className='text-primary-500'>data structure</span> ?
      </h1>
      <p className='mt-5 text-center'>Here are several resource that you can learn with</p>
      <p className='mt-10 text-right'>
        <Link href='/'>
          <a className='font-bold text-primary-500 hover:opacity-75'>View All Articles</a>
        </Link>
      </p>
      <div className='mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article, index) => (
          <Link href={`article/${article.slug}`} key={index}>
            <a className='flex flex-row rounded border p-3 shadow hover:opacity-75 sm:flex-col sm:p-5'>
              <div className='w-1/3 sm:w-full'>
                <NextImage
                  className='relative min-h-[120px] w-full sm:h-[200px]'
                  src={article.gambar}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='w-2/3 pl-3 sm:w-full sm:pl-0'>
                <p className='font-bold text-primary-500 sm:mt-3'>{article.judul_artikel}</p>
                <p className='line-clamp-4'>{article.detail_singkat}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}
