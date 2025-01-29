import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface LinkButtonProps {
  href: string
  color?: 'btn-primary-first' | 'btn-primary-second' | 'btn-primary-third' | 'btn-secondary-first' | 'btn-secondary-second' | 'btn-secondary-third' | 'btn-transparent' | ''
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export const LinkButton = ({ href, color = 'btn-primary-third', size = 'lg', className, children }: LinkButtonProps) => {
  const router = useRouter()

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`flex flex-row justify-center items-center ${color}  ${className} ${size === 'sm' ? 'text-xs py-1 px-1.5' : size === 'md' ? 'text-sm py-1.5 px-2' : 'text-md py-2 px-4'}`}
    >
      {children}
    </Link>
  )
}
