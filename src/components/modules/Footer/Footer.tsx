import { NextImage } from '@/elements/NextImage/NextImage'

export const Footer = () => {
  return (
    <footer id='contact'>
      <div className='bg-[url("/assets/images/adv-gunadarma.png")] bg-cover bg-center bg-no-repeat pt-44 md:bg-top'>
        <div className='bg-neutral-50 pb-5'>
          <div className='layout'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-1/3 lg:pr-5'>
                <div className='w-full'>
                  <NextImage
                    className='relative h-[140px] w-[250px]'
                    src='assets/images/logo-text.png'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <p>
                  <img
                    src='assets/icons/developer-icon.svg'
                    className='inline w-[30px]'
                    alt='multicultural-people-icon'
                  />
                  <span className='ml-3 font-bold'>Developed By</span>
                </p>
                <p className=''>Gunadarma IO 2021</p>
              </div>
              <div className='lg:w-1/3 lg:pr-5'>
                <p className='mt-5'>
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
              <div className='lg:w-1/3 lg:pl-5'>
                <div className='mt-5 grid grid-cols-4 gap-2'>
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
                <div className='mt-5 flex justify-center'>
                  <div className='mx-3 w-[50px]'>
                    <NextImage
                      className='relative h-[50px] w-full'
                      src='assets/icons/instagram-icon.svg'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                  <div className='mx-3 w-[50px]'>
                    <NextImage
                      className='relative h-[50px] w-full'
                      src='assets/icons/medium-monogram-icon.svg'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                  <div className='mx-3 w-[50px]'>
                    <NextImage
                      className='relative h-[50px] w-full'
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
