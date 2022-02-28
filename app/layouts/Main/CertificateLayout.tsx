import { Box, Container, Paper } from '@mui/material'
import Image from 'next/image'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CertificatesLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Container maxWidth='md'>
        <Paper elevation={2} sx={{ p: 3, mt: { xs: 4, md: 8 } }}>
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              width: '100%',
              maxWidth: 400,
              height: { xs: 150 },
              marginX: 'auto',
            }}
          >
            <Image
              loading='eager'
              src='/assets/images/logo-text.png'
              layout='fill'
              objectFit='contain'
              alt='Logo UG I/O'
            />
          </Box>
          {children}
        </Paper>
      </Container>
    </Box>
  )
}
