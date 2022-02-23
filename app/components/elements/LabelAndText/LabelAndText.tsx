import { Box, SxProps, Theme, Typography } from '@mui/material'

type Props = {
  label: string
  text: string
  sx?: SxProps<Theme>
  sxLabel?: SxProps<Theme>
  sxText?: SxProps<Theme>
}

export const LabelAndText = ({ label, text, sx, sxLabel, sxText }: Props) => {
  return (
    <Box sx={sx}>
      <Typography
        variant='body1'
        sx={{ mb: 0.8, fontSize: '1rem', ...sxLabel }}
      >
        {label}
      </Typography>
      <Typography
        variant='body1'
        sx={{ fontSize: '1.2rem', fontWeight: 600, ...sxText }}
      >
        {text}
      </Typography>
    </Box>
  )
}
