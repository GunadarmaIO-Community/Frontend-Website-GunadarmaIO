import { Certificate, Division, EventListAPI } from './type'

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

export interface GetEventListResponse extends DefaultResponse {
  data: EventListAPI[]
}
