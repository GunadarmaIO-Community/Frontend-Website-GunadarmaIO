export type Certificate = {
  id: string
  no_sertifikat: string
  nama: string
  email: string
  user_id: string
  url: string
  event_id: string
  file: string
  type: string
  created_at: string
  updated_at: string
}

export type Division = {
  id: number
  nama: string
  deskripsi: string
  status: number
  created_at: string
  updated_at: string
  deleted_at: string
  slug: string
  teams: {
    id: number
    nama: string
    foto: string
    divisi_id: number
    status: number
    created_at: string
    updated_at: string
    deleted_at: string
    email: string
  }[]
}
