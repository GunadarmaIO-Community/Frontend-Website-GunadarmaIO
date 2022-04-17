import { NextImage } from '@/elements/NextImage/NextImage'

type Props = {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <footer id='contact'>
      <div className='bg-[url("/assets/images/adv-gunadarma.png")] bg-cover bg-center bg-no-repeat pt-44 md:bg-top'>
        <div className={`bg-neutral-50 ${className}`}>
          <div className='layout'>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <div className='text-center lg:w-1/3 lg:text-left'>
                <div className='px-10 sm:px-40 lg:px-0'>
                  <NextImage width='449px' height='65px' src='assets/images/logo-text.png' layout='responsive' />
                </div>
                <p className='mt-5'>
                  <img
                    src='assets/icons/developer-icon.svg'
                    className='inline w-[30px]'
                    alt='multicultural-people-icon'
                  />
                  <span className='ml-3 font-bold'>Developed By</span>
                </p>
                <p className=''>Gunadarma IO 2021</p>
              </div>
              <div className='text-center lg:w-1/3 lg:text-left'>
                <p className='mt-5 lg:mt-0'>
                  <img
                    src='assets/icons/location-icon.svg'
                    className='inline w-[30px]'
                    alt='multicultural-people-icon'
                  />
                  <span className='ml-3 font-bold'>Gunadarma University, Depok</span>
                </p>
                <p>Gunadarma IO is a non-profit organization established by students from Gunadarma University</p>
                <p className='mt-5'>
                  <img
                    src='assets/icons/contact-us-icon.svg'
                    className='inline w-[30px]'
                    alt='multicultural-people-icon'
                  />
                  <span className='ml-3 font-bold'>Contact Us</span>
                </p>
                <p>iogunadarma.community@gmail.com</p>
              </div>
              <div className='w-full self-center sm:w-3/5 lg:flex lg:w-1/3 lg:flex-col lg:justify-between lg:self-auto'>
                <div className='mt-5 grid grid-cols-4 gap-2 lg:mt-0'>
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-bem-fti-ug.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-bem-fikti.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-ccug.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-comit-ug.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-gdsc-ug.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-comma-design.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-lab-ti.png'
                    layout='fill'
                    objectFit='contain'
                  />
                  <NextImage
                    className='relative h-[50px] w-full'
                    src='assets/images/partner/logo-labsi-kalimalang.png'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='mt-5 flex justify-center lg:mt-0 lg:justify-end'>
                  <div className='ml-5 w-[40px]'>
                    <NextImage
                      className='relative h-[40px] w-full'
                      src='assets/icons/instagram-icon.svg'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                  <div className='ml-5 w-[40px]'>
                    <NextImage
                      className='relative h-[40px] w-full'
                      src='assets/icons/medium-monogram-icon.svg'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                  <div className='ml-5 w-[40px]'>
                    <NextImage
                      className='relative h-[40px] w-full'
                      src='assets/icons/youtube-icon.svg'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
