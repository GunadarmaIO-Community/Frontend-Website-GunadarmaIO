import { Certificate } from './type'
export type GetCertificateResponse = {
  success: boolean
  message: string
  data: Certificate[]
}
