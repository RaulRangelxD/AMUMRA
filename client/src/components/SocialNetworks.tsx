'use client'

import React from 'react'
import Link from 'next/link'
import { FacebookIcon } from '@/components/icons/Facebook'
import { InstagramIcon } from '@/components/icons/Instagram'
import { YoutubeIcon } from '@/components/icons/Youtube'
import { WhatsappIcon } from '@/components/icons/Whatsapp'

export const SocialNetworks = () => {
  return (
    <div id='social-navbar' className='flex flex-row w-full z-50 items-center justify-center from-10% text-default-light'>
      <Link href={'https://www.instagram.com/amumraddhh/'} className='hover:bg-black/10 rounded py-0.5 px-1'>
        <InstagramIcon className='mx-2 my-0 lg:mx-0 lg:my-2' size='sm' />
      </Link>
      <Link href={'https://www.youtube.com/channel/UCCmGDdO2-paNs-mEfVkMwmA'} className='hover:bg-black/10 rounded py-0.5 px-1'>
        <YoutubeIcon className='mx-2 my-0 lg:mx-0 lg:my-2' size='sm' />
      </Link>
      <Link href={'https://api.whatsapp.com/send/?phone=5491163300000&text&type=phone_number&app_absent=0'} className='hover:bg-black/10 rounded py-0.5 px-1'>
        <WhatsappIcon className='mx-2 my-0 lg:mx-0 lg:my-2' size='sm' />
      </Link>
      <Link href={'https://www.facebook.com/mujeres.migrantas'} className='hover:bg-black/10 rounded py-0.5'>
        <FacebookIcon className='mx-1 my-0 lg:mx-0 lg:my-2' size='sm' />
      </Link>
    </div>
  )
}
