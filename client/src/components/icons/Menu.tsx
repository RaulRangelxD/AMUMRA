interface MenuIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const MenuIcon = ({ size = 'md', color = '', className = '' }: MenuIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
  </svg>
)
