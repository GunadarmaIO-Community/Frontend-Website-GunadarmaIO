import { Box, Button, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { LabelAndText } from '../../app/components/elements/LabelAndText/LabelAndText'
import { CertificatesLayout } from '../../app/layouts/Main/CertificateLayout'
import { GetCertificateResponse } from '../../app/types/response'
import { Certificate } from '../../app/types/type'

const CertificatePage = () => {
  const [certificate, setCertificateData] = useState<Certificate>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()
  const { serialNumber } = router.query
  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get<GetCertificateResponse>(
          `/frontend/sertifikat/${serialNumber}`
        )
        setCertificateData(res.data.data)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    serialNumber && fetchCertificate()
  }, [serialNumber])

  const convertStringToDate = (string: string) => {
    return new Date(string).toLocaleDateString(['id'])
  }

  return (
    <>
      <Head>
        <title>UG I/O - Certificates</title>
      </Head>
      <CertificatesLayout>
        {isLoading ? (
          <CircularProgress
            size={80}
            sx={{ mx: 'auto', display: 'block', p: 4 }}
          />
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: certificate ? 'yellowgreen' : 'orange',
                p: { xs: 3, sm: 4 },
                borderRadius: 2
              }}>
              <Typography
                variant='h4'
                component='h1'
                sx={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: { xs: '1rem', sm: '2rem' }
                }}>
                {certificate
                  ? 'This certificate is valid'
                  : 'The certificate you are looking for is not found'}
              </Typography>
            </Box>
            {certificate && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'left' },
                  mt: 4
                }}>
                <Box sx={{ width: { sm: '50%' } }}>
                  <LabelAndText
                    sx={{ p: 1 }}
                    sxText={{ color: 'blue' }}
                    text={certificate.no_sertifikat}
                    label='Serial number'
                  />
                  <LabelAndText
                    sx={{ p: 1 }}
                    text={certificate.nama}
                    label='Name'
                  />
                  <LabelAndText
                    sx={{ p: 1 }}
                    text={certificate.type ? certificate.type : 'Participant'}
                    label='Type'
                  />
                </Box>
                <Box>
                  <LabelAndText
                    sx={{ p: 1 }}
                    text={convertStringToDate(certificate.created_at)}
                    label='Date published'
                  />
                  <LabelAndText
                    sx={{ p: 1 }}
                    text='Forever'
                    label='Valid until'
                  />

                  <a
                    style={{ textDecoration: 'none' }}
                    href={certificate.file}
                    target='_blank'
                    rel='noreferrer'>
                    <Button sx={{ m: 1, mt: 2 }} variant='contained'>
                      See certificate
                    </Button>
                  </a>
                </Box>
              </Box>
            )}
          </>
        )}
      </CertificatesLayout>
    </>
  )
}

export default CertificatePage
