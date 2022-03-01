import { Button, Input, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { CertificatesLayout } from '../../layouts/Main/CertificateLayout'

const CertificatesPage = () => {
  const [input, setInput] = useState<string>('')
  const router = useRouter()

  return (
    <>
      <Head>
        <title>UG I/O - Certificates</title>
      </Head>
      <CertificatesLayout>
        <Box sx={{ textAlign: 'center' }}>
          <Typography component='h1' mb={4} variant='h6'>
            Validate a certificate from us
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Input
              value={input}
              inputProps={{ style: { textAlign: 'center' } }}
              onChange={(e) => setInput(e.target.value)}
              required
              placeholder='Copy & paste your certificate serial number here'
              fullWidth
              sx={{ fontWeight: 700 }}
            />
          </Box>
          <Button
            variant='contained'
            fullWidth
            onClick={() => input && router.push(`/certificates/${input}`)}
          >
            SEARCH
          </Button>
        </Box>
      </CertificatesLayout>
    </>
  )
}

export default CertificatesPage
