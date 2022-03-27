import { Certificate, Division, Event } from './type'

export type DefaultResponse = {
  success: boolean
  message: string
}

export interface GetCertificateResponse extends DefaultResponse {
  data: Certificate[]
}

export interface GetDivisionResponse extends DefaultResponse {
  data: Division[]
}

export interface GetEventResponse extends DefaultResponse {
  data: Event[]
}
