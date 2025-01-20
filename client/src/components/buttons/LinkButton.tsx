import Link from 'next/link'

interface LinkButtonProps {
  href: string
  type?: 'btn-primary' | 'btn-secondary' | 'btn-third' | 'btn-transparent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export const LinkButton = ({ href, type = 'btn-third', size = 'lg', className, children }: LinkButtonProps) => (
  <Link href={href} className={`flex flex-row justify-center items-center ${type}  ${className} ${size === 'sm' ? 'text-xs py-0.5 px-1' : size === 'md' ? 'text-sm py-1 px-2' : 'text-md py-2 px-4'}`}>
    {children}
  </Link>
)
