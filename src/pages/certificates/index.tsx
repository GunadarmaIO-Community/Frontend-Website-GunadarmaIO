import axios from 'axios'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Layout } from 'src/layouts/Main/Layout'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
import { NextImage } from '@/elements/NextImage/NextImage'
import { SearchField } from '@/elements/SearchField/SearchField'
import { Seo } from '@/elements/Seo/Seo'

import { GetCertificateResponse } from '@/types/response'
import { Certificate } from '@/types/type'
export default function CertificatesIndexPage() {
  const [input, setInput] = useState('')
  const [certificate, setCertificateData] = useState<Certificate>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get<GetCertificateResponse>(
          `/certificate/${input}`
        )
        setCertificateData(res.data.data[0])
        console.log(res.data)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    input && fetchCertificate()
  }, [input])
  return (
    <Layout>
      <Seo templateTitle='Index' />

      <main>
        <section className=''>
          <div
            className='layout flex min-h-screen flex-col 
            items-center justify-center py-20'
          >
            <NextImage
              className='relative h-[200px] w-full'
              src='/assets/images/logo-text.png'
              layout='fill'
              objectFit='contain'
              alt='Gunadarma I/O Logo'
            />
            <h3 className='mb-8'>Validate certificates from us</h3>
            <SearchField
              input={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <Document
                file={{
                  url: certificate?.file,
                }}
                onLoadError={(e) => {
                  console.error(e)
                }}
              >
                <Page pageNumber={1} />
              </Document>
              {console.log(certificate?.file)}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
