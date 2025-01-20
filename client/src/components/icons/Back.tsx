interface BackIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const BackIcon = ({ size = 'md', color = '', className = '' }: BackIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3' />
  </svg>
)
