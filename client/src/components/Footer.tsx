import { SocialNetworks } from '@/components/SocialNetworks'

export const Footer = () => {
  const date = new Date()
  return (
    <div className='flex flex-col items-center space-x-3 px-12 lg:px-24 py-2 w-full bg-neutral-800 text-[#FFFFFF]'>
      <h3>© AMUMRA {date.getFullYear()}</h3>
      <SocialNetworks />
    </div>
  )
}
