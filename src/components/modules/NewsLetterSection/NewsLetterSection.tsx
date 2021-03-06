import axios, { AxiosError } from 'axios'
import { useState } from 'react'

import { Button } from '@/elements/Button/Button'
import { Input } from '@/elements/Input/Input'
import { NextImage } from '@/elements/NextImage/NextImage'

import { PostSubscriptionResponse } from '@/types/response'

type Props = {
  className?: string
}

export const NewsLetterSection = ({ className }: Props) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState({ status: '', message: '' })

  const handleInputName = (e: any) => {
    setName(e.target.value)
    setStatus({ status: '', message: '' })
  }

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value)
    setStatus({ status: '', message: '' })
  }

  function isEmailValid() {
    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (emailRegex.test(email)) return true
    setStatus({ status: 'error', message: 'Email tidak valid' })
    return false
  }

  const sendSubscribe = async () => {
    try {
      const resSubscribe = await axios.post<PostSubscriptionResponse>(
        'newsletter',
        { name: name, email: email },
        { headers: { 'Content-Type': 'application/json' } }
      )
      setName('')
      setEmail('')
      return resSubscribe.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError
        if (error && error.response) {
          return error.response.data
        }
      }
      return { status: 'error', message: 'error' }
    }
  }

  const handleSubscribe = async () => {
    if (name && isEmailValid()) {
      const subscribe = await sendSubscribe()
      setStatus(subscribe)
    } else {
      if (!name && !email) {
        setStatus({ status: 'error', message: 'Nama dan Email tidak boleh kosong' })
      } else if (!name) {
        setStatus({ status: 'error', message: 'Nama tidak boleh kosong' })
      } else if (!email) {
        setStatus({ status: 'error', message: 'Email tidak boleh kosong' })
      }
    }
  }

  return (
    <section className={`bg-primary-100 ${className}`}>
      <div className='layout'>
        <div className='flex flex-col py-10 md:flex-row md:py-20'>
          <div className='w-full md:w-3/5 md:pr-5'>
            <NextImage
              className='relative h-[50px] w-[50px]'
              src='/assets/images/logo.png'
              layout='fill'
              objectFit='contain'
            />
            <h1 className='mt-3 font-bold'>
              A <span className='text-primary-500'>developer community</span> for everyone
            </h1>
            <p className='mt-3'>
              Highlighting class to join, articles to read, and event to attend. We sharing insight every period with
              free & lifetime membership
            </p>
          </div>
          <div className='w-full text-center md:mt-5 md:w-2/5'>
            <Input type='text' placeholder='Your Name' className='mt-3' value={name} onChange={handleInputName} />
            <Input
              type='email'
              placeholder='Email Address'
              className='mt-3'
              value={email}
              onChange={handleInputEmail}
            />
            <Button variant='primary' className='mt-3 block w-full' onClick={() => handleSubscribe()}>
              Subscribe
            </Button>
            <small>We respect your privacy, free subscribe</small>
            {status.status === 'success' && <p className='text-primary-500'>{status.message}</p>}
            {status.status === 'error' && <p className='text-red-500'>{status.message}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
