import Link from 'next/link'
import Image from 'next/image'

interface NewsCardProps {
  href?: string
  className?: string
  image: string
  title: string
  description: string
}

export const NewsCard = ({ href = '#', className, image, title, description }: NewsCardProps) => (
  <Link href={href} className={`${className} text-default-dark flex flex-col max-w-3xs min-w-3xs justify-center items-center pb-2 shadow rounded`}>
    <Image className='w-full rounded-t' src={image} alt='Next.js logo' width={510} height={510} priority />
    <div className='w-full p-3 pe-5 space-y-2'>
      <h3 className='text-lg w-full text-start'>{title}</h3>
      <p className='text-sm font-light'>{description}</p>
    </div>
  </Link>
)
