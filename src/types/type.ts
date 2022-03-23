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

export type Event = {
  id: number
  judul_event: string
  slug: string
  detail_singkat: string
  detail_lengkap: string
  gambar: string
  tanggal_pelaksanaan: string
  tempat_pelaksanaan: string
  batas_peserta: number
  status: number
  batas_pendaftaran: string
  url: string
  created_at: string
  updated_at: string
  deleted_at: string
}
