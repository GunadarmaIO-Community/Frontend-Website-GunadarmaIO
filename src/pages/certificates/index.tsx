import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`
import { useWindowSize } from 'src/hooks/useWIndowSize'
import { Layout } from 'src/layouts/Main/Layout'

import { Button } from '@/elements/Button/Button'
import { NextImage } from '@/elements/NextImage/NextImage'
import { SearchField } from '@/elements/SearchField/SearchField'
import { Seo } from '@/elements/Seo/Seo'
import { Spinner } from '@/elements/Spinner/Spinner'
import { UnstyledLink } from '@/elements/UnstyledLink/UnstyledLink'
import { Navbar } from '@/modules/Navbar/Navbar'

import { GetCertificateResponse } from '@/types/response'
import { Certificate } from '@/types/type'

export default function CertificatesIndexPage() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [certificate, setCertificateData] = useState<Certificate>()
  const linkEl = useRef<HTMLAnchorElement>(null)
  const windowSize = useWindowSize()

  const generateBlobUrl = async (id: string) => {
    const res = await axios.get(`/certificate/storage/${id}`, {
      headers: { 'Content-Type': 'application/pdf' },
      responseType: 'blob',
    })

    if (linkEl.current) {
      linkEl.current.download = `Certificate.pdf`
      linkEl.current.href = window.URL.createObjectURL(new Blob([res.data]))
    }
  }

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get<GetCertificateResponse>(`/certificate/${input}`)
        setCertificateData(res.data.data[0])
        generateBlobUrl(res.data.data[0].id)
      } catch (e) {
        console.error(e)
        setCertificateData(undefined)
      } finally {
        setIsLoading(false)
      }
    }
    input && fetchCertificate()
  }, [input])
  return (
    <Layout>
      <Seo templateTitle='Certificate' />

      <Navbar />
      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-20'>
            <NextImage
              className='relative h-[100px] w-full sm:h-[150px] sm:w-3/5'
              src='/assets/images/logo-text.png'
              layout='fill'
              objectFit='contain'
              alt='Gunadarma I/O Logo'
            />
            <h3 className='mb-8'>Validate certificates from us</h3>
            <SearchField input={input} onChange={(e) => setInput(e.target.value)} />
            <Document
              className='mt-6 mb-4 sm:mt-11'
              file={certificate?.file && `data:application/pdf;base64,${certificate?.file}`}
              onLoadError={(e) => {
                console.error(e)
              }}
              noData={!input.length ? '' : isLoading ? <Spinner /> : 'Certificate not found'}
              error='Sorry, something went wrong'
              loading={<Spinner />}
            >
              <Page pageNumber={1} width={windowSize.width * 0.8} />
            </Document>
            {certificate?.file && !isLoading && (
              <UnstyledLink ref={linkEl} openNewTab href=''>
                <Button>Download certificate</Button>
              </UnstyledLink>
            )}
          </div>
        </section>
      </main>
    </Layout>
  )
}
