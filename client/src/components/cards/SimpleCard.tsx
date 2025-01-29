import Link from 'next/link'

interface SimpleCardProps {
  href?: string
  className?: string
  title: string
  description: string
}

export const SimpleCard = ({ href = '#', className, title, description }: SimpleCardProps) => (
  <Link href={href} className={`${className} text-default-light flex flex-col max-w-3xs min-w-3xs justify-center items-center p-8 space-y-2 shadow aspect-square rounded-xl`}>
    <h3 className='text-lg text-center font-bold'>{title}</h3>
    <p className='text-wrap'>{description}</p>
  </Link>
)
